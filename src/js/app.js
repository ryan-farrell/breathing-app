const container = document.querySelector('.container');
const text = document.querySelector('#text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breatherAnimation() {
    text.innerHTML = 'Breathe In!';
    container.className = 'container grow';

    setTimeout(()=> {
        text.innerText = 'Hold';
        
        setTimeout(()=> {
            text.innerText = 'Breathe Out!';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}

setInterval(breatherAnimation, totalTime);

$(document).ready(function(){
    $('.message').click(function() {
        $('.mytext').slideToggle();
    });

    const oAudio = $('#waterfall-soundtrack');
    const oPlaybtn = $('#play-btn');
    const oStopbtn = $('#stop-btn');
    
    oPlaybtn.on('click', function() {
        oAudio.currentTime = 0;
        oAudio.attr('loop', 'loop')
        oAudio[0].play();
    });

    oStopbtn.on('click', function() {
        oAudio.removeAttr('loop')
        oAudio[0].pause();
    }); 
});