const start = document.getElementById('start');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const ctime = document.getElementById('ctime');

let audioElm = new Audio();
document.getElementById('audioFile').addEventListener('change', (e) => {
    let file = e.target.files[0];
    let src = window.URL.createObjectURL(file);
    audioElm.src = src;
}, false)

start.addEventListener('click', () => {
    audioElm.play();
    audioElm.addEventListener('timeupdate', () => {
        let sec = '0' + Math.floor(audioElm.currentTime % 60);
        let min = '0' + Math.floor(audioElm.currentTime / 60);
        sec = sec.substr(sec.length-2, 2);
        min = min.substr(min.length-2, 2);

        let totalSec = '0' + Math.floor(audioElm.duration % 60);
        let totalMin = '0' + Math.floor(audioElm.duration / 60);
        totalSec = totalSec.substr(totalSec.length-2, 2);
        totalMin = totalMin.substr(totalMin.length-2, 2);
        ctime.innerHTML = min + ":" + sec + '[' + totalMin + ':' + totalSec + ']';
    }, true)
}, false)

pause.addEventListener('click', () => {
    audioElm.pause();
}, false)

stop.addEventListener('click', () => {
    audioElm.pause();
    audioElm.currentTime = 0;
}, false)



prev.addEventListener('click', () => {
    audioElm.currentTime -= 10;
}, false)

next.addEventListener('click', () => {
    audioElm.currentTime += 10;
}, false)

