// main function
function digiClock() {

    // let twentyFour = false;


    // THIS IS WHERE I AM TYING TO ADD THE BUTTON FUNCTIONALITY
    // IF YOU COMMENT OUT LINES 10-21 THE CLOCK WILL RUN IN 12 HOUR TIME AS EXPECTED
    // LINE 39 IS WHERE THE CHANGE SHOULD HAPPEN
    function switchTwentyfour(twentyFour) {
        if (twentyFour == false) {
            return true;
        } else {
            return false;
        }
    }
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 

    let twentyFour = false;

    let button = document.getElementById("switch");
    button.onclick = switchTwentyfour(twentyFour);
    twentyFour = switchTwentyfour();


    // grabs the date and time info from the sky :)
    let today = new Date();

    // sets variable to for all necessary time/date functions
    let sec = today.getSeconds();
    let min = today.getMinutes();
    let hour = today.getHours();
    let mon = (today.getMonth() + 1);
    let day = today.getDate();
    let year = (today.getFullYear() - 2000);

    // makes it 12 hour time


    /// THIS IS WHERE I WAS TRYING TO ADD BUTTON FUNCTIONALITY ///
    if (twentyFour == false) {
        if (hour > 12) {
            hour = hour - 12;
        }
    }
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    // sets midnight to 12
    if (hour == 0) {
        hour = 12;
    }

    // 2 digit formats
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (day < 10) {
        day = "0" + day;
    }
    if (mon < 10) {
        mon = "0" + mon;
    }

    // formats for upload
    let date = mon + "|" + day + "|" + year;
    let time = hour + ":" + min + ":" + sec;

    // changes the HTML elements by ID to the above date and time 
    let datevar = document.getElementById("date");
    datevar.textContent = date;
    let timevar = document.getElementById("clock");
    timevar.textContent = time;

}

// intervals the clock
setInterval(digiClock, 1000);


