const musicContainer = document.querySelector('.music-container');
const audioContainer = document.querySelector('.audio-container');
const progress = document.getElementById('progress');
const title = document.getElementById('title');
const progressContainer = document.getElementById('progress-container');
const cover = document.getElementById('cover');

const audio = document.querySelector('audio');

// Songs
const songs = ['summer', 'hey', 'ukulele'];

// keep track of song
let songIndex = 2;
let currentSong = songs[songIndex];

// load song details
loadSong();

function loadSong(song = songs[songIndex]) {
  title.innerText = song.toUpperCase();
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;

  return audio;
}

// Buttons
const playPauseBtn = document.getElementById('play');
const playPauseIcon = document.querySelector('.fa-play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// toggle play/pause symbols
const togglePlayPause = () => {
  playPauseIcon.classList.toggle('fa-play');
  playPauseIcon.classList.toggle('fa-pause');
};

// show song progress
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercentage = (currentTime / duration) * 100;
  progress.style.width = `${progressPercentage}%`;
}

// set progress
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

//EVENTS

// play / pause
playPauseBtn.addEventListener('click', () => {
  if (playPauseBtn.id === 'pause') {
    ('click');
    audio.pause();
    togglePlayPause();
    document.querySelector('.music-container').classList.toggle('play');
    playPauseBtn.id = 'play';
    return;
  }

  if (playPauseBtn.id === 'play') {
    audio.play();
    togglePlayPause();
    document.querySelector('.music-container').classList.toggle('play');
    playPauseBtn.id = 'pause';
    return;
  }
});

// next song
nextBtn.addEventListener('click', () => {
  if (songIndex === 2) songIndex = 0;
  else {
    songIndex += 1;
  }
  loadSong().play();
});

// previous song
prevBtn.addEventListener('click', () => {
  if (songIndex === 0) songIndex = 2;
  else {
    songIndex -= 1;
  }
  loadSong().play();
});

// update time
audio.addEventListener('timeupdate', updateProgress);

// click on progress bar
progressContainer.addEventListener('click', setProgress);
