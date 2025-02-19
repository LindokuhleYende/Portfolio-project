document.getElementById("lefteye").style.backgroundColor = "purple"
document.getElementById("head").style.transform = "rotate(15deg)"
// Put yellow dots around his right eye.
document.getElementById("righteye").style.border =
"4px yellow dotted";
// Change his left arm’s color.
document.getElementById("leftarm").style.backgroundColor =
"#FF00FF";
// Change the text color.
document.getElementById("body").style.color = "#FF0000";
// Give Douglas hair.
document.getElementById("head").style.borderTop =
"5px black solid";
document.getElementById("mouth").style.backgroundColor = "brown";



var rightEye = document.getElementById("righteye");
var body = document.getElementById("body");
var leftEye = document.getElementById("lefteye");


rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
body.addEventListener("click", moveRightLeft)

function moveUpDown(e){
    var robotPart = e.target;
    var top = 0;
    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.top = top + "%";
        top++;
        if (top === 20){
            clearInterval(id);
}
}
}

var leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", moveRightLeft);
function moveRightLeft(e) {
    var robotPart = e.target;
    var id = setInterval(frame, 5) // draw every 5ms
    var left = 15;
    robotPart.style.left = left + "%";
    function frame() {
        if (left === 40){
            left++;
            clearInterval(id);
}
}
}

