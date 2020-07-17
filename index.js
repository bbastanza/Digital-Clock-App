document.addEventListener('DOMContentLoaded', function () {
    digiClock();
});

/// I MOVED THIS VARIABLE UP HERE BECAUSE THERE WAS A VALUE ERROR
let twentyFour = true;

/// THIS IS THOUGHT WOULD CALL THE CLICK... THERE IS A NEW UNCAUGHT TYPE ERROR
///>>>>>Uncaught TypeError: buttonPress is null<<<<<<< LINE 12
let buttonPress = document.getElementById("switch")

buttonPress.addEventListener("click", function () {
    switchTwentyfour(twentyFour);

}
)

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


    /// HERE IS WHERE I CALLED THE FORMAT FUNCTION ///
    formatTime(sec, min, hour);


    let date = mon + "|" + day + "|" + year;
    let datevar = document.getElementById("date");
    datevar.textContent = date;
    // let timevar = document.getElementById("clock");
    // timevar.textContent = time;
}

/// THIS IS THE NEW FORMATING FUNCTION. I THOUGHT IT WOULD BE BETTER TO 
/// JUST INCLUDE THE TIME BECAUSE IT IS THE ONLY THING THAT HAS THE CHANGE
function formatTime(sec, min, hour) {
    if (twentyFour == false) {
        if (hour.toString().length < 2) {
            hour = "0" + hour;
        }
        time = (hour - 12) + ":" + min + ":" + sec;
        let timevar = document.getElementById("clock");
        timevar.textContent = time;
    } else {
        if (hour.toString().length < 2) {
            hour = "0" + hour;
        }
        time = hour + ":" + min + ":" + sec;
        let timevar = document.getElementById("clock");
        timevar.textContent = time;
    }
}

// *** I ADDED THE CONSOLE LOG TO SEE IF THE BUTTON WAS TRIGGARING THIS FUNCTION AT ALL... NO DICE ***
// function to switch from 24/12 hour time
function switchTwentyfour(twentyFour) {
    console.log("HI")
    if (twentyFour == false) {
        twentyFour = true;
    }
    if (twentyFour == true) {
        twentyFour = false;
    }
}
// on button click this triggers the switchTwentyfour()^^^^
//     let button = document.getElementById("switch");
//     button.onclick = switchTwentyfour(twentyFour);
//     twentyFour = switchTwentyfour(twentyFour);
// }

function digiClock() {
    setInterval(update, 1000);
}




