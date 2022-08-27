const  timeDisplay = document.querySelector("#timeDisplay");
const  startBtn = document.querySelector("#startBtn");
const  pauseBtn = document.querySelector("#pauseBtn");
const  resetBtn = document.querySelector(" #resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);

        // elapsedTime = EndTime - StartTime

    }
});
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        // elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
     elapsedTime = 0;
     currentTime = 0;
     paused = true;
     intervalId;
     hrs = 0;
     mins = 0;
     secs = 0;
     timeDisplay.textContent="00:00:00";

});

//  ye h ki dubara fir se timing hmari watch ke hisab se chle i.e watch ko follow kre

function updateTime(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000*60*60)) % 60);

    hrs = formatZeros(hrs);
    mins = formatZeros(mins);
    secs = formatZeros(secs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
}

// ye h double digit me lane ke liye 

function formatZeros(time){
    time = time.toString();
    return time.length<2 ? "0" + time: time;
}