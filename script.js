// Songs
const songs = [
  document.getElementById('song-one'),
  document.getElementById('song-two'),
  document.getElementById('song-three'),
];

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

// play / pause
const playPause = (song) => {
  playPauseBtn.addEventListener('click', () => {
    if (playPauseBtn.id === 'pause') {
      ('click');
      song.pause();
      togglePlayPause();
      document.querySelector('.music-container').classList.toggle('play');
      playPauseBtn.id = 'play';
      return;
    }

    if (playPauseBtn.id === 'play') {
      song.play();
      togglePlayPause();
      document.querySelector('.music-container').classList.toggle('play');
      playPauseBtn.id = 'pause';
    }
  });
};

playPause(songs[0]);

// stop function
const stop = (song) => {
  song.pause();
  song.currentTime = 0;
};

// next song
nextBtn.addEventListener('click', () => {
  if (!songs[0].paused) {
    stop(songs[0]);
    playPause(songs[1]);
    songs[1].play();

    // } else if (!songs[1].paused) {
    //   stop(songs[1]);
    //   playPause(songs[2]);
    // } else {
    //   stop(songs[2]);
    //   songs[0].play;
  }
});

// playBtn.addEventListener('click', () => {
//   trackOne.play();
//   console.log(playBtn.dataset.playing);

//   if (audioContext.state === 'suspended') {
//     audioContext.resume();
//   }

//   if (playBtn.dataset.playing === 'false') {
//     playBtn.dataset.playing = 'true';
//   }
// });

// // const forward = () => {
// //     nextBtn.addEventListener('click', () => {
// //         if ()
// //     })
// // }
