document.addEventListener('DOMContentLoaded', function () {
    digiClock();
});

let twentyFour = false;

// button presses
let buttonPress = document.getElementById("button")

twentyFour = buttonPress.addEventListener("click", function () {
    switchTwentyfour();

}
)

// main function
function update() {
    let today = new Date();
    let sec = today.getSeconds();
    let min = today.getMinutes();
    let hour = today.getHours();
    let mon = (today.getMonth() + 1);
    let day = today.getDate();
    let year = (today.getFullYear() - 2000);
    if (sec.toString().length < 2) {
        sec = "0" + sec;
    }
    if (min.toString().length < 2) {
        min = "0" + min;
    }
    if (day.toString().length < 2) {
        day = "0" + day;
    }
    if (mon.toString().length < 2) {
        mon = "0" + mon;
    }

    // sets midnight to 12
    if (hour == 0) {
        hour = 12;
    }

    /// calling the format time function
    formatTime(sec, min, hour);


    let date = mon + "|" + day + "|" + year;
    let datevar = document.getElementById("date");
    datevar.textContent = date;

}

// function to switch from 24/12 hour time
function switchTwentyfour() {
    if (twentyFour == false) {
        twentyFour = true;
    } else {
        twentyFour = false;
    }
}
// format time function
function formatTime(sec, min, hour) {
    // formating AM/PM
    if (twentyFour == false) {
        if (hour == 12) {
            time = hour + ":" + min + ":" + sec + " PM";
            let timevar = document.getElementById("clock");
            timevar.textContent = time;
        }
        // this part is kinda funky.. subtracting 12 from noon and then adding it back.
        // i think there's def a better way
        if (hour == 24 || hour >= 12) {
            hour = hour - 12
            if (hour == 0) {
                hour = hour + 12
            }
            if (hour.toString().length < 2) {
                hour = "0" + hour;
            }
            time = hour + ":" + min + ":" + sec + " PM";
            let timevar = document.getElementById("clock");
            timevar.textContent = time;
        } else {
            if (hour.toString().length < 2) {
                hour = "0" + hour;
            }
            time = hour + ":" + min + ":" + sec + " AM";
            let timevar = document.getElementById("clock");
            timevar.textContent = time;
        }

        // formatting for 24 hour
    } else {
        if (hour.toString().length < 2) {
            hour = "0" + hour;
        }
        time = hour + ":" + min + ":" + sec;
        let timevar = document.getElementById("clock");
        timevar.textContent = time;
    }
}



function digiClock() {
    setInterval(update, 1000);
}




