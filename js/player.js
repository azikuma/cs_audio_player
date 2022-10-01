var fileList = []
var audios = []

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

let audioFiles = document.getElementById('audioFiles');

let audioElm = new Audio();
document.getElementById('audioFile').addEventListener('change', (e) => {
    let file = e.target.files[0];
    let src = window.URL.createObjectURL(file);
    audioElm.src = src;
    
}, false)


let audioElms = new Audio();
audioFiles.addEventListener("change", function(e) {
    fileList = e.target.files
    // console.log(filelists[0].name)

    var playList = '<ul>';
    for(var i=0; i<fileList.length; i++){
        var url = window.URL.createObjectURL(fileList[i])
        audios.push(url)
        playList += '<li>';
        playList += fileList[i].name + '</li>';
    }
    playList += '</ul>';
    document.getElementById("playListArea").innerHTML = playList;
    audioElms.src = audios[0]
},false);



let index = 0
audioElms.addEventListener('ended', () => {
    index++
    if (index < audios.length) {
        audioElms.src = audios[index]
        audioElms.play();
    }
    else {
        audioElms.src = audios[0]
        audioElms.play()
        index = 0
    }
})


    start.addEventListener('click', () => {
        // audioElm.play();

        // audioElm.addEventListener('timeupdate', () => {
        //     let ac = audioElm.currentTime;
        //     seekbar.value = ac;
        //     let sec = '0' + Math.floor(ac % 60);
        //     let min = '0' + Math.floor(ac / 60);
        //     sec = sec.substr(sec.length-2, 2);
        //     // min = min.substr(min.length-2, 2);
        //     min = min.substr(1);
    
        //     let ad = audioElm.duration;
        //     seekbar.max = Math.floor(ad);
        //     let totalSec = '0' + Math.floor(ad % 60);
        //     let totalMin = '0' + Math.floor(ad / 60);
        //     totalSec = totalSec.substr(totalSec.length-2, 2);
        //     // totalMin = totalMin.substr(totalMin.length-2, 2);
        //     totalMin = totalMin.substr(1);
            
        //     stime.innerHTML = min + ":" + sec;
        //     ttime.innerHTML = totalMin + ":" + totalSec; 
        // }, true)
        audioElmStart();

        audioElms.play()
        audioElms.addEventListener('timeupdate', () => {
            let ac = audioElms.currentTime;
            seekbar.value = ac;
            let sec = '0' + Math.floor(ac % 60);
            let min = '0' + Math.floor(ac / 60);
            sec = sec.substr(sec.length-2, 2);
            // min = min.substr(min.length-2, 2);
            min = min.substr(1);
    
            let ad = audioElms.duration;
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

    const audioElmStart = () => {
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
    }
    
    pause.addEventListener('click', () => {
        audioElm.pause();
        audioElms.pause();
    }, false)
    
    stop.addEventListener('click', () => {
        audioElm.pause();
        audioElms.pause();
        audioElm.currentTime = 0;
        audioElms.currentTime = 0;
    }, false)


    prev.addEventListener('click', () => {
        audioElm.currentTime -= 10;
        audioElms.currentTime -= 10;
    }, false)
    
    next.addEventListener('click', () => {
        audioElm.currentTime += 10;
        audioElms.currentTime += 10;
    }, false)
    
    toubai.addEventListener('click', () => {
        audioElm.playbackRate = 1;
        audioElms.playbackRate = 1;
    }, false)
    
    tengo.addEventListener('click', () => {
        audioElm.playbackRate = 1.5;
        audioElms.playbackRate = 1.5;
    }, false)
    
    nibai.addEventListener('click', () => {
        audioElm.playbackRate = 2;
        audioElms.playbackRate = 2;
    }, false)


    seekbar.addEventListener('input', e => {
        audioElm.pause();
        audioElm.currentTime = seekbar.value;
    });

    seekbar.addEventListener('change', e => {
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
    })




// var playList = '<ul>';
// for(var i=0; i<fileList.length; i++){
//     playList += '<li>';
//     playList += fileList[i].name + '</li>';
// }
// playList += '</ul>';
// document.getElementById("playListArea").innerHTML = playList;

