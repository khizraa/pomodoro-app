let tIME = document.getElementById("time");
let sTART = document.querySelector("#start");
let rESET = document.querySelector("#reset");
let mINUTES = 25;
let sECONDS = 0;
let tIMEINTERVAL;
let eFFECTButtons = document.querySelectorAll(".effect");
let lastClickedButtonType;
function displayTime() {
    tIME.innerText = `${mINUTES < 10 ? '0' : ''}${mINUTES}:${sECONDS < 10 ? '0' : ''}${sECONDS}`;
}

eFFECTButtons.forEach((button) => {
    button.addEventListener('click', function () {
        if (this.dataset.type === "focus") {
            mINUTES = 25;
            sECONDS = 0;
        } else {
            mINUTES = 5;
            sECONDS = 0;
        }
        lastClickedButtonType = this.dataset.type; // Update the last clicked button type
        displayTime();
    });
});

sTART.addEventListener('click', function () {
    tIMEINTERVAL = setInterval(start, 1000);
});

function start() {
    if (mINUTES === 0 && sECONDS === 0) {
        clearInterval(tIMEINTERVAL);
        alert("Pomodoro session completed!");
    } else if (sECONDS === 0) {
        mINUTES--;
        sECONDS = 59;
    } else {
        sECONDS--;
    }
    displayTime();
}

rESET.addEventListener('click', function () {
    // Clear the interval to stop the timer
    clearInterval(tIMEINTERVAL);
    if (lastClickedButtonType === "focus") {
        mINUTES = 25;
        sECONDS = 0;
    } else {
        mINUTES = 5;
        sECONDS = 0;
    }
    displayTime();
});


displayTime();


