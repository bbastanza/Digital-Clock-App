//
//**************  Project 1 Digital Clock App **************//

// listens to dom content loaded to start app
document.addEventListener('DOMContentLoaded', function () {
    setInterval(update, 1000);
});

// sets time to Standard on start
let twentyFour = false;

// event listener for button to switch time format
document.getElementById("button").addEventListener("click", function () {
    switchTwentyfour();
})

// variables for DOM elements
const clock = document.getElementById("clock");
const datevar = document.getElementById("date");

// main function
function update() {
    const today = new Date();
    let second = today.getSeconds();
    let minute = today.getMinutes();
    let hour = today.getHours();
    let month = (today.getMonth() + 1);
    let day = today.getDate();
    let year = (today.getFullYear() - 2000);
    const timeOfDay = hour >= 12 ? "PM" : "AM";

    // passes numbers to padd with zeros if they are single digets
    second = padWithZeros(second)
    minute = padWithZeros(minute)
    month = padWithZeros(month)
    day = padWithZeros(day)

    // passes values to format functions
    formatTime(second, minute, hour, timeOfDay);
    formatDate(month, day, year)
}

// function to make numbers 2 digits
function padWithZeros(num) {
    return num.toString().length < 2 ? "0" + num : num;
}

// function to format the date
function formatDate(month, day, year) {
    let date = month + "|" + day + "|" + year;
    datevar.textContent = date;
}

// function to switch from 24/12 hour time
function switchTwentyfour() {
    twentyFour = !twentyFour;
}

// format time function
function formatTime(second, minute, hour, timeOfDay) {
    let time;
    // Military Time Format
    if (twentyFour) {
        time = hour + ":" + minute + ":" + second;
        clock.textContent = time
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