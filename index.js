// examine the document object

// console.log(document) to find info about a current HTML
// gets info on todays date and time
let today = new Date();

// gets info on todays date and assigns it to the variable "date"
let date = (today.getMonth() + 1) + "|" + today.getDate() + "|" + (today.getFullYear() - 2000);

// gets info on todays time and assigns it to the variable "time"----> this does not tick
// let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

function hourCount() {
    let today = new Date();
    let hour = setInterval(today.getHours(), 1000);
    h = String(hour);
    return h;
}

function minCount() {
    let today = new Date();
    let min = setInterval(today.getMinutes(), 1000);
    m = String(min);
    return m;
}

function secCount() {
    let today = new Date();
    let sec = setInterval(today.getSeconds(), 1000);
    s = String(sec);
    return s;
}


console.log(secCount())

let time = hourCount() + ':' + minCount() + ':' + secCount();



// logs the date in console
console.log(date);

// logs the time in console
console.log(time);



// get element by id //
let datevar = document.getElementById("date")
datevar.textContent = date

let timevar = document.getElementById("clock")
timevar.textContent = time


