import { playMusic } from './backgroun-music.js';
import { startTimer } from './timer.js';
import './fog-animation.js';

startTimer();
document.body.addEventListener('mousemove', playMusic);
