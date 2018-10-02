const player = document.querySelector('.player');
const playerBtn = player.querySelector('.player__button.toggle');
const videoPlayer = document.querySelector('.player__video');

function playItSam() {

    if (videoPlayer.paused) {
        videoPlayer.play()
    } else {
        videoPlayer.pause();
    }
}

playerBtn.addEventListener('click', playItSam);
videoPlayer.addEventListener('click', playItSam);