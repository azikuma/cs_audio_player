const start = document.getElementById('start');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const stime = document.getElementById('stime');
const ttime = document.getElementById('ttime');
const seekbar = document.getElementById('seekbar');
const seek = document.getElementById('seek');

const toubai = document.getElementById('toubai');
const tengo = document.getElementById('tengo');
const nibai = document.getElementById('nibai');

const snum = document.getElementById('snum');

let audioElm = new Audio();
document.getElementById('audioFile').addEventListener('change', (e) => {
    let file = e.target.files[0];
    let src = window.URL.createObjectURL(file);
    audioElm.src = src;
    
}, false)


start.addEventListener('click', () => {
    audioElm.play();
    audioElm.addEventListener('timeupdate', () => {
        let ac = audioElm.currentTime;
        seekbar.value = ac;
        let sec = '0' + Math.floor(ac % 60);
        let min = '0' + Math.floor(ac / 60);
        sec = sec.substr(sec.length-2, 2);
        // min = min.substr(min.length-2, 2);
        min = min.substr(1);

        let ad = audioElm.duration;
        seekbar.max = Math.floor(ad);
        let totalSec = '0' + Math.floor(ad % 60);
        let totalMin = '0' + Math.floor(ad / 60);
        totalSec = totalSec.substr(totalSec.length-2, 2);
        // totalMin = totalMin.substr(totalMin.length-2, 2);
        totalMin = totalMin.substr(1);
        
        stime.innerHTML = min + ":" + sec;
        ttime.innerHTML = totalMin + ":" + totalSec;
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

toubai.addEventListener('click', () => {
    audioElm.playbackRate = 1;
}, false)

tengo.addEventListener('click', () => {
    audioElm.playbackRate = 1.5;
}, false)

nibai.addEventListener('click', () => {
    audioElm.playbackRate = 2;
}, false)


function corectCurrentTime(v) {
    snum.innerHTML = v;
    audioElm.currentTime = v.toInt();
}