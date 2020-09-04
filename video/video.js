

window.addEventListener('load', function () {
    var pause = document.querySelector('.first')
    var video = document.querySelector('video');
    var progress = document.querySelector('.progress');
    var time = document.querySelector('.time');
    var start = document.querySelector('.start')
    var end = document.querySelector('.end')
    function zanting() {
        if (pause.className == 'iconfont first pause') {//三角
            pause.className = 'iconfont first begin';
            video.play();
        }
        else {//杠
            pause.className = 'iconfont first pause';
            video.pause();
        }
    }

    //video.currentTime,video.duration
    video.addEventListener('click', zanting)
    pause.addEventListener('click', zanting)
    video.addEventListener('timeupdate', function () {
        progress.value = (video.currentTime / video.duration) * 100;//在0-100的min和max之间
        let mins = Math.floor(video.currentTime / 60);
        if (mins < 10) {
            mins = '0' + String(mins);
        }
        let secs = Math.floor(video.currentTime % 60);
        if (secs < 10) {
            secs = '0' + String(secs);
        }
        time.innerHTML = '' + mins + ":" + secs + '';
        if (video.currentTime == this.duration) {
            pause.className = 'iconfont first pause';
        }
    })
    start.addEventListener('click', function () {
        video.currentTime = 0;
        video.play();
        pause.className = 'iconfont first begin';
    })
    end.addEventListener('click', function () {
        video.currentTime = video.duration;
    })
})