const player = document.querySelector('.player');
const playerBtn = player.querySelector('.player__button.toggle');
const videoPlayer = document.querySelector('.player__video');
const skipButtons = document.querySelectorAll('[data-skip]');
const playbackRate = document.getElementsByName('playbackRate').item(0);
const volumeRate = document.getElementsByName('volume').item(0);
const rangeInputs = document.querySelectorAll('.player__slider');

// Playing the video

function playItSam() {

    if (videoPlayer.paused) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
}

// Updating textContent of a play-pause button

function updateBtn() {
    let icon = this.paused ? '▶' : '| |';
    playerBtn.textContent = icon; 
}

// Skipping video forward and backward

function skipVideo() {
    let timeToSkip = this.dataset.skip;
    videoPlayer.currentTime += parseFloat(timeToSkip);
}

// Changing volume and playback of the video

function changeTheSetting () {
    let rangeValue = this.value;
    if (this.name == 'volume') {
        videoPlayer.volume = rangeValue;
    } else if (this.name == 'playbackRate') {
        videoPlayer.playbackRate = rangeValue;
    }
}

// Event listeners

playerBtn.addEventListener('click', playItSam);
videoPlayer.addEventListener('click', playItSam);
videoPlayer.addEventListener('play', updateBtn);
videoPlayer.addEventListener('pause', updateBtn);
skipButtons.forEach(skipBtn => skipBtn.addEventListener('click', skipVideo));
rangeInputs.forEach(input => input.addEventListener('input', changeTheSetting));