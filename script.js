// tutorial method

let daysOfWeekArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function setTime() {
  let now = new Date(),
    year = now.getFullYear(),
    month = now.getMonth(),
    date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate(),
    day = now.getDay(),
    hours = now.getHours(),
    minutes = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes(),
    seconds = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
  ampm = hours >= 12 ? "pm" : "am";

  hours = hours > 12 ? hours - 12 : hours;
  hours = hours < 10 ? "0" + hours : hours;

  const classes = [
    ".year",
    ".month",
    ".month-date",
    ".day",
    ".hours",
    ".minutes",
    ".seconds",
    ".ampm"
  ];
  const values = [
    year,
    monthsArray[month],
    date,
    daysOfWeekArray[day],
    hours,
    minutes,
    seconds,
    ampm
  ];

  classes.forEach((className, i) => {
    span = document.querySelector(className);
    span.textContent = values[i];
  });
}
setTime();
setInterval("setTime()", 1000);

// my method

// // whent the page is loaded at first

// setSeconds()
// setMinutes()
// setHours()
// setAmPm()
// setDay()
// setDayOfMonth()
// setYear()

// // geters functions

// function getYear(date) {
//     let year = date.getFullYear()
//     return year
// }

// function getDayOfMonth(date) {
//     let dayOfMonth = {month: monthsArray[date.getMonth()], date: date.getDate() < 10 ? '0'+date.getDate() : date.getDate() }
//     return dayOfMonth
// }

// function getDay(date) {
//     let day = `${daysOfWeekArray[date.getDay()]}`
//     return day
// }

// function getHours(date) {
//     let hours = date.getHours()
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     hours = hours < 10 ? '0' + hours : hours
//     return hours
// }

// function getMinutes(date) {
//     let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
//     return minutes
// }

// function getSeconds(date) {
//     let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
//     return seconds
// }

// function getAmPm(hours) {
//     let ampm = hours >= 12 ? 'pm' : 'am';
//     return ampm
// }

// // seters functions

// function setSeconds() {
//     date = new Date()
//     let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
//     secondsContent = `${seconds}`
//     if (date.getSeconds() === 0) {
//         setMinutes()
//     }
// }

// function setMinutes() {
//     date = new Date()
//     let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
//     minutesContent = `${minutes}`
//     if (date.getHours() === 0) {
//         setHours()
//     }
// }

// function setHours() {
//     date = new Date()
//     let hours = date.getHours()
//     if (hours === 12 || hours === 0) {
//         setAmPm()
//     }
//     let ampm = getAmPm(hours)
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     hours = hours < 10 ? '0' + hours : hours
//     hoursContent = `${hours}`

//     if (hours === '12' && ampm === 'am') {
//         setDay()
//         setDayOfMonth()
//     }
// }

// function setAmPm() {
//     const hours = new Date().getHours()
//     ampmContent = getAmPm(hours)
// }

// function setDay() {
//     daysContent = getDay(new Date())
// }

// function setDayOfMonth() {
//     const dayOfMonth = getDayOfMonth(new Date())
//     dayOfMonthContent = `${dayOfMonth.month} ${dayOfMonth.date}`
//     if (dayOfMonth.month === 'January' && dayOfMonth.date === '01') {
//         setYear()
//     }
// }

// function setYear() {
//     yearContent = getYear(new Date())
// }

// setInterval(setSeconds, 1000)

function gotopagegit (){ 
const url1 = "https://www.github.com"
window.location.href=url1;
}
function gotopagewiki(){
    const url1 = "https://www.wikipedia.org"
    window.location.href=url1;
 }
function gotopageyou(){ 
    const url1 = "https://www.youtube.com"
    window.location.href=url1;
}
function gotopagechat(){
    const url1 = "https://chat.openai.com"
    window.location.href=url1;
 }

 //search function (google search)

 function googleSearch()
 {
     var text= document.getElementById("search").value;
     var cleanQuery = text.replace(" ","+",text);
     var url='http://www.google.com/search?q='+cleanQuery;
 
     window.location.href=url;
 }