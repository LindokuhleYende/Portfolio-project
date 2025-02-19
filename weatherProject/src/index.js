function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
  let wind = document.querySelector("#wind-speed");
  wind.innerHTML = `${response.data.wind.speed}km/h`;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  let condition = document.querySelector("#condition");
  condition.innerHTML = `,${response.data.condition.description}`
  let icon = document.getElementById("condition-icon")
  icon.setAttribute("src",`${response.data.condition.icon_url}`);
  let date = new Date(response.data.time * 1000);
  getForecast(response.data.city);
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;
  displayCity(city);
}

function displayCity(city){
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    
  axios.get(apiUrl).then(displayTemperature);

}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

function getForecast(city){
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
}

function displayForecast(response){
  console.log(response.data);

  
  let forecastHtml = " ";
  response.data.daily.forEach(function(day,index){
    if (index>0 && index<6){
      forecastHtml += 
      `
      <div class="weather-forecast-day">
         <div class="weather-forecast-date"> ${formatDay(day.time)}</div>
         <div class="weather-forecast-icon">
           <img src="${day.condition.icon_url}" class="weather-forecast-icon" />
         </div>
         <div class="weather-forecast-temperatures">
            <div class="weather-forecast-temperature">
               <strong>${Math.round(day.temperature.maximum)}°C</strong>
            </div>
            <div class="weather-forecast-temperature">${Math.round(day.temperature.minimum)}°C</div>
         </div>
      </div>
`;

    }
  });
  let forecastElement = document.querySelector("#forecast")
  forecastElement.innerHTML = forecastHtml;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();
currentDateELement.innerHTML = formatDate(currentDate);
displayCity("Soweto");