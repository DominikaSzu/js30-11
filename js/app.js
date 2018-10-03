const player = document.querySelector('.player');
const playerBtn = player.querySelector('.player__button.toggle');
const videoPlayer = document.querySelector('.player__video');
const skipButtons = document.querySelectorAll('[data-skip]');
const playbackRate = document.getElementsByName('playbackRate').item(0);
const volumeRate = document.getElementsByName('volume').item(0);
const rangeInputs = document.querySelectorAll('.player__slider');
const progressBar = document.querySelector('.progress__filled');
const progressDiv = document.querySelector('.progress');

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
    videoPlayer[this.name] = this.value;
}

// Adjust the length of progress bar to movie progress

function handleProgressBar() {
    const percent = ((videoPlayer.currentTime * 100) / videoPlayer.duration);
    progressBar.style.flexBasis = `${percent}%`
}

// Handle progess bar manually

function handleBarManually(e) {
    let newBarWidth = ((e.offsetX * 100) / progressDiv.offsetWidth);
    progressBar.style.flexBasis = `${newBarWidth}%`;
    let currentTimeMovie = ((newBarWidth * videoPlayer.duration) / 100);
    videoPlayer.currentTime = currentTimeMovie;
}

// Event listeners

playerBtn.addEventListener('click', playItSam);
videoPlayer.addEventListener('click', playItSam);
videoPlayer.addEventListener('play', updateBtn);
videoPlayer.addEventListener('pause', updateBtn);
skipButtons.forEach(skipBtn => skipBtn.addEventListener('click', skipVideo));
rangeInputs.forEach(input => input.addEventListener('input', changeTheSetting));
videoPlayer.addEventListener('timeupdate', handleProgressBar);
progressDiv.addEventListener('click', handleBarManually);