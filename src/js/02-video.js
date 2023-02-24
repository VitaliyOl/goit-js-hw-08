import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

let LOCAL_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem(LOCAL_KEY, data.seconds);
}

const timeOnPlay = localStorage.getItem(LOCAL_KEY);

player
  .setCurrentTime(timeOnPlay)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
