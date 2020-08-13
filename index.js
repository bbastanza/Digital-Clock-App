//
//**************  Project 1 Digital Clock App **************//

// listens to dom content loaded to start app
document.addEventListener("DOMContentLoaded", function () {
    setInterval(update, 1000);
});

let twentyFour = false;

document.getElementById("button").addEventListener("click", function () {
    switchTwentyfour();
});

const clock = document.getElementById("clock");
const datevar = document.getElementById("date");

function update() {
    const today = new Date();
    let second = today.getSeconds();
    let minute = today.getMinutes();
    let hour = today.getHours();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let year = today.getFullYear() - 2000;
    const timeOfDay = hour >= 12 ? "PM" : "AM";

    second = padWithZeros(second);
    minute = padWithZeros(minute);
    month = padWithZeros(month);
    day = padWithZeros(day);

    formatTime(second, minute, hour, timeOfDay);
    formatDate(month, day, year);
}

function padWithZeros(num) {
    return num.toString().length < 2 ? "0" + num : num;
}

function formatDate(month, day, year) {
    let date = month + "|" + day + "|" + year;
    datevar.textContent = date;
}

function switchTwentyfour() {
    twentyFour = !twentyFour;
}

function formatTime(second, minute, hour, timeOfDay) {
    let time;
    // Military Time Format
    if (twentyFour) {
        time = hour + ":" + minute + ":" + second;
        clock.textContent = time;
        // Standard Time Format
    } else {
        if (hour === "00") {
            time = "12" + ":" + minute + ":" + second + " " + timeOfDay;
            clock.textContent = time;
            return;
        }
        let tHour = hour > 12 ? hour - 12 : hour;
        tHour = padWithZeros(tHour);
        time = tHour + ":" + minute + ":" + second + " " + timeOfDay;
        clock.textContent = time;
    }
}
