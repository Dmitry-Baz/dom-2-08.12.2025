import PlayingArea from './playing-area/playing-area';

document.addEventListener('DOMContentLoaded', () => {
  const playingArea = new PlayingArea(document.querySelector('.playing-area'));

  playingArea.start();
})
