function digiClock() {
    setInterval(update, 1000);
}


document.addEventListener('DOMContentLoaded', function () {
    digiClock();
});

let twentyFour = false;

// button presses
document.getElementById("button").addEventListener("click", function () {
    switchTwentyfour();
})

let clock = document.getElementById("clock");
let datevar = document.getElementById("date");

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

    second = padWithZeros(second)
    minute = padWithZeros(minute)
    month = padWithZeros(month)
    day = padWithZeros(day)


    /// calling the format time function
    formatTime(second, minute, hour, timeOfDay);
    formatDate(month, day, year)


}

function padWithZeros(num) {
    return num.toString().length < 2 ? "0" + num : num;
}

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
    // formating AM/PM\
    let time;
    if (twentyFour) {
        time = hour + ":" + minute + ":" + second;
        clock.textContent = time
    } else {
        if (hour === "00") {
            time = "12" + ":" + minute + ":" + second + " " + timeOfDay;
            clock.textContent = time;
            return;
        }
        // debugger;
        let tHour = hour > 12 ? hour - 12 : hour;
        tHour = padWithZeros(tHour);
        time = tHour + ":" + minute + ":" + second + " " + timeOfDay;
        clock.textContent = time;
    }
}
