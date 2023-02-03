import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

onReload();

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(timeupdate) {
  const videoCurrentTime = timeupdate.seconds.toString();

  localStorage.setItem(LOCAL_STORAGE_KEY, videoCurrentTime);
}

function onReload() {
  const savedLocalStorageTime = Number(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (savedLocalStorageTime) {
    console.log(savedLocalStorageTime);
    player
      .setCurrentTime(savedLocalStorageTime)
      .then(function () {})
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            break;

          default:
            break;
        }
      });
  }
}

// const player = new Player('handstick', {
//     id: 19231868,
//     width: 640
// });



// const savedTime = localStorage.getItem("videoplayer-current-time");


// player.setCurrentTime(savedTime).then(function(seconds) {

// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':

//             break;

//         default:

//             break;
//     }
// });

// player.on('timeupdate', throttle(function (timeObj) {
//     localStorage.setItem("videoplayer-current-time", JSON.stringify(timeObj.seconds)); 
// }, 1000));



