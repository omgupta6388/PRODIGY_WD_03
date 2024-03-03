document.addEventListener("DOMContentLoaded", function () {
    var seconds=0;
    var tens=0;
    var interval;
    var startButton=document.getElementById('start');
    var stopButton=document.getElementById('stop');
    var resetButton=document.getElementById('reset');
    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
    function startTimer() {
        interval=setInterval(updateTimer, 10);
        startButton.disabled=true;
        stopButton.disabled=false;
    }
    function stopTimer() {
        clearInterval(interval);
        startButton.disabled=false;
        stopButton.disabled=true;
    }
    function resetTimer() {
        clearInterval(interval);
        seconds=0;
        tens=0;
        updateTimerDisplay();
        startButton.disabled = false;
        stopButton.disabled = false;
    }
    function updateTimer() {
        tens++;
        if (tens>=100) {
            tens=0;
            seconds++;
        }
        updateTimerDisplay();
    }

    function updateTimerDisplay(){
        var secondsDisplay=seconds<10? "0" + seconds : seconds;
        var tensDisplay=tens<10 ? "0" + tens : tens;
        document.getElementById('seconds').textContent = secondsDisplay;
        document.getElementById('tens').textContent = tensDisplay;
    }
});