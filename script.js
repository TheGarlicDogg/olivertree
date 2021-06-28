let replay = document.querySelector('.replay-button');
let intro = document.querySelector('.intro-video');
replay.disabled = true;
setTimeout(function(){replay.disabled = false;},47500);
replay.onclick = function () {
    intro.currentTime = 0;
    intro.play();
    
}
