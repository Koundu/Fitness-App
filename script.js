const yogaBtn = document.getElementById('yoga');
const hiitBtn = document.getElementById('hiit');
const rideBtn = document.getElementById('ride');
const joinBtn = document.getElementById('join');
var programElement = document.getElementsByClassName('display')[0];

hiitBtn.addEventListener('mouseover',()=>imageChange('url("./assets/hoverState1.jpg")'));
hiitBtn.addEventListener('mouseout',()=>imageChange(''));
rideBtn.addEventListener('mouseover',()=>imageChange('url("./assets/hoverState2.jpg")'))
rideBtn.addEventListener('mouseout',()=>imageChange(''));


function imageChange(path){
    programElement.style.backgroundImage = path;
    console.log(programElement.style.backgroundImage);
}