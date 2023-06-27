let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
    if(int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
}); 

function displayTimer() {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = 
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

}



// TIMER



var inputHour;
var inputMinute;
var inputSecond;
var outputHour = document.getElementById("outputHour");
var outputMinute = document.getElementById("outputMinute");
var outputSecond = document.getElementById("outputSecond");
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var timerApp;
var outputContainer = document.getElementById("outputContainer");

function StartClock()
{
    inputHour = Number(document.getElementById("inputHour").value);
    inputMinute = Number(document.getElementById("inputMinute").value);
    inputSecond = Number(document.getElementById("inputSecond").value);

    if(inputHour > 0 || (inputMinute > 0 && inputMinute < 60)|| (inputSecond > 0 && inputSecond < 60))
    {
        outputHour.innerHTML = FormatTime(inputHour);
        outputMinute.innerHTML = FormatTime(inputMinute);
        outputSecond.innerHTML = FormatTime(inputSecond);
        outputContainer.style.display = "flex";
        startBtn.style.display = "none";
        stopBtn.style.display = "inline-block";
        timerApp = setInterval(myClock, 1000);
    }
    else
    {
        document.getElementById("inputHour").value = "";
        document.getElementById("inputMinute").value = "";
        document.getElementById("inputSecond").value = "";
        alert("Enter valid time.");
    }
}

function StopClock()
{
    startBtn.style.display = "inline-block";
    stopBtn.style.display = "none";
    outputHour.innerHTML = "00";
    outputMinute.innerHTML = "00";
    outputSecond.innerHTML = "00";
    clearInterval(timerApp);
}

function ResetClock()
{
    StopClock();
    outputContainer.style.display = "none";
    document.getElementById("inputHour").value = "";
    document.getElementById("inputMinute").value = "";
    document.getElementById("inputSecond").value = "";
    outputHour.innerHTML = "00";
    outputMinute.innerHTML = "00";
    outputSecond.innerHTML = "00";
    inputHour = 0;
    inputMinute = 0;
    inputSecond = 0;
}
    
function myClock()
{  
    if(inputSecond > 0){
        inputSecond--;
        outputSecond.innerHTML = FormatTime(inputSecond);
    }else{
        if(inputMinute > 0){
            inputMinute--;
            outputMinute.innerHTML = FormatTime(inputMinute);
            inputSecond = 59;
            outputSecond.innerHTML = FormatTime(inputSecond);
        }else{
            if(inputHour > 0){
                inputHour--;
                outputHour.innerHTML = FormatTime(inputHour);
                inputMinute = 59;
                outputMinute.innerHTML = FormatTime(inputMinute);
                inputSecond = 59;
                outputSecond.innerHTML = FormatTime(inputSecond);
            }else{
                StopClock();
                new Audio('./beep.mp3').play()
                return;
            }
        }
    }
}

function FormatTime(time)
{
    var formatedTime
    if(time < 10)
    {
        formatedTime = "0" + time.toString();
    }
    else
    {
        formatedTime = time.toString();
    }
    return formatedTime
}
