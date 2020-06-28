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
