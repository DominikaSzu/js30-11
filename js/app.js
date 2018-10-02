const player = document.querySelector('.player');
const playerBtn = player.querySelector('.player__button.toggle');
const videoPlayer = document.querySelector('.player__video');
const skipButtons = document.querySelectorAll('[data-skip]');

function playItSam() {

    if (videoPlayer.paused) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }

}

function updateBtn() {
    let icon = this.paused ? '▶' : '| |';
    playerBtn.textContent = icon; 
}

function skipVideo() {
    let timeToSkip = this.dataset.skip;
    videoPlayer.currentTime += parseFloat(timeToSkip);
}

playerBtn.addEventListener('click', playItSam);
videoPlayer.addEventListener('click', playItSam);
videoPlayer.addEventListener('play', updateBtn);
videoPlayer.addEventListener('pause', updateBtn);
skipButtons.forEach(skipBtn => skipBtn.addEventListener('click', skipVideo));