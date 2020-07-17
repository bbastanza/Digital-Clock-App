document.addEventListener('DOMContentLoaded', function () {
    setInterval(update, 1000)
});


let twentyFour = true;

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

    // THIS IS WHERE I TRIED TO IMPLIMENT THE twentyFour FUNCTION
    let x = switchTwentyfour(twentyFour)
    if (x = false)
        hour = hour - 12;


    if (hour.toString().length < 2) {
        hour = "0" + hour;
    }
    // sets midnight to 12
    if (hour == 0) {
        hour = 12;
    }




    let date = mon + "|" + day + "|" + year;
    let time = hour + ":" + min + ":" + sec;


    let datevar = document.getElementById("date");
    datevar.textContent = date;
    let timevar = document.getElementById("clock");
    timevar.textContent = time;
}

// THIS IS WHERE I TRIED TO IMPLIMENT THE BUTTON AGAIN
// IT STILL ISN'T FUNCTIONING PROPERLY BECAUSE WHEN I CHANGE THE VALUE OF 
// twentyFour  ^^^^ AT THE TOP ^^^ FROM TRUE TO FALSE IT IS STILL VIEWED IN 24 HOUR TIME


// function to switch from 24/12 hour time
function switchTwentyfour(twentyFour) {
    if (twentyFour == false) {
        twentyFour = true;
        return twentyFour;
    }
    if (twentyFour == true) {
        twentyFour == false;
        return twentyFour;
    }
    // on button click this triggers the switchTwentyfour()^^^^
    let button = document.getElementById("switch");
    button.onclick = switchTwentyfour(twentyFour);
    twentyFour = switchTwentyfour(twentyFour);
}

// I HAD A THOUGHT TO CLEAN THE CODE UP BY PUTTING THE FORMATTING IN THIS FUNCTION
// I COULDN'T GET IT TO FUNCTION PROPERLY THOUGH SO ITS COMMENTED OUT AND
// THIS CODE IS BACK IN THE UPDATE FUNCTION

// function formats() {
//     if (sec.length < 2) {
//         sec = "0" + sec;
//     }
//     if (min.length < 2) {
//         min = "0" + min;
//     }
//     if (hour.length < 2) {
//         hour = "0" + hour;
//     }
//     if (day.length < 2) {
//         day = "0" + day;
//     }
//     if (mon.length < 2) {
//         mon = "0" + mon;
//     }
//     // sets midnight to 12
//     if (hour == 0) {
//         hour = 12;
//     }
// }

// I TRIED HERE TO SIMPLIFY THE MAIN FUNCTION, BUT IT KEPT BREAKING THE BROWSER WHEN
// IT SAW THIS WHILE LOOP (I THINK)
// main function
function digiClock() {


    while (true) {
        setInterval(update, 1000);


    }
}




