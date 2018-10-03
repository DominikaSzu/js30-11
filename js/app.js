const player = document.querySelector('.player');
const playerBtn = player.querySelector('.player__button.toggle');
const videoPlayer = document.querySelector('.player__video');
const skipButtons = document.querySelectorAll('[data-skip]');
const playbackRate = document.getElementsByName('playbackRate').item(0);
const volumeRate = document.getElementsByName('volume').item(0);

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

// Changing the playback rate of video

function changePlaybackRate () {
    let speed = this.value;
    videoPlayer.playbackRate = speed;
}

// Changing the volume of the video

function changeVolume () {
    let volume = this.value;
    videoPlayer.volume = volume;
}

// Event listeners

playerBtn.addEventListener('click', playItSam);
videoPlayer.addEventListener('click', playItSam);
videoPlayer.addEventListener('play', updateBtn);
videoPlayer.addEventListener('pause', updateBtn);
skipButtons.forEach(skipBtn => skipBtn.addEventListener('click', skipVideo));
playbackRate.addEventListener('input', changePlaybackRate);
volumeRate.addEventListener('input', changeVolume);