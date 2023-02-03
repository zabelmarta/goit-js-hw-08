import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";



function onPlay(event) {

    let currentTime = event.seconds;

    localStorage.setItem(STORAGE_KEY, currentTime);
    
};

player.on('timeupdate', throttle(onPlay, 1000));
function updateCurrentTime() {
    let currentTime = localStorage.getItem(STORAGE_KEY)

    if (currentTime) {
        player.setCurrentTime(currentTime)
    } 
    
};
updateCurrentTime();