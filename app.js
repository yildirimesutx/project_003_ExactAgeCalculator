let birthDayYear = document.getElementById("years");
let birthDayMonths = document.getElementById("months");
let birthDayDays   = document.getElementById("days");
let birthDayHours = document.getElementById("hours");
let birthDayMinutes = document.getElementById("minutes");
let birthDaySeconds = document.getElementById("seconds");

let birthDayİnput = document.querySelector("input[name=birthday]");
let resets = document.querySelector("#reset");

myDate.max = new Date().toLocaleDateString('en-ca');

resets.addEventListener("click",()=>{
    window.location.reload(false);
})


birthDayİnput.addEventListener("change", exact);
function exact() {
    let year = new Date().getFullYear() - new Date(birthDayİnput.value).getFullYear();
    
    let months = new Date().getMonth() - new Date(birthDayİnput.value).getMonth();

    let days = new Date().getDate() - new Date(birthDayİnput.value).getDate();
    
    if (days<0){
        months -= 1;
        days += 31;
    }
    if (months<0){
        year -= 1;
        months +=12
    }

    months = (months<10) ? "0"+months : months;

    days = (days<10) ? "0"+days : days;



    let hours = new Date().getHours();
    hours = (hours<10) ? "0"+hours : hours;
    let minutes = new Date().getMinutes();
    minutes = (minutes<10) ? "0"+minutes : minutes;
    

    let seconds = new Date().getSeconds();
    seconds = (seconds<10) ? "0"+seconds : seconds;

    year = (year<10) ? "0"+year : year;

    birthDayYear.innerHTML = year ;
    birthDayMonths.innerHTML =months ;
    birthDayDays.innerHTML = days ;
    birthDayHours.innerHTML = hours ;
    birthDayMinutes.innerHTML = minutes;
    birthDaySeconds.innerHTML = seconds;

};


