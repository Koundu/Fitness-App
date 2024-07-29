const yogaBtn = document.getElementById('yoga');
const hiitBtn = document.getElementById('hiit');
const rideBtn = document.getElementById('ride');
const joinBtn = document.querySelectorAll('#join');
var programElement = document.getElementsByClassName('display')[0];


hiitBtn.addEventListener('mouseover',()=>imageChange('url("./assets/hoverState1.jpg")'));
hiitBtn.addEventListener('mouseout',()=>imageChange(''));
rideBtn.addEventListener('mouseover',()=>imageChange('url("./assets/hoverState2.jpg")'))
rideBtn.addEventListener('mouseout',()=>imageChange(''));


function imageChange(path){
    programElement.style.backgroundImage = path;
}

yogaBtn.addEventListener('mouseover',function(){
    if(joinBtn[0].querySelector('p').style.borderBottom == ''){
        joinBtn[0].querySelector('p').style.borderBottom = '2px solid #C79D5B'
    }else{
        joinBtn[0].querySelector('p').style.borderBottom = ''
    }
})

yogaBtn.addEventListener('mouseout',function(){
    joinBtn[0].querySelector('p').style.borderBottom = ''
})

hiitBtn.addEventListener('mouseover',function(){
    if(joinBtn[1].querySelector('p').style.borderBottom == ''){
        joinBtn[1].querySelector('p').style.borderBottom = '2px solid #C79D5B'
    }else{
        joinBtn[1].querySelector('p').style.borderBottom = ''
    }
})

hiitBtn.addEventListener('mouseout',function(){
    joinBtn[1].querySelector('p').style.borderBottom = ''
})


rideBtn.addEventListener('mouseover',function(){
    if(joinBtn[2].querySelector('p').style.borderBottom == ''){
        joinBtn[2].querySelector('p').style.borderBottom = '2px solid #C79D5B'
    }else{
        joinBtn[2].querySelector('p').style.borderBottom = ''
    }   
})

rideBtn.addEventListener('mouseout',function(){
    joinBtn[2].querySelector('p').style.borderBottom = ''
})
