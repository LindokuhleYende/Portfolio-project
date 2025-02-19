var trainSpeed = 250;
var trainPosition = 0;
var animation;

var train = document.getElementById("train");
train.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);

    if (trainPosition===408){
        trainSpeed = 0;
        stopTrain()
    }

    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);

    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 408) {
        alert("OOOOO!");
        console.log("Crash!");
        clearInterval(animation);
    }
}

function stopTrain() {
    if (trainPosition > 0) {
        clearInterval(animation);
    }
}


function remainder(a,b){
    return "The remainder of " + a + " divided by " + b+ " is " + a%b
}