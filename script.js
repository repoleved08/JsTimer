// Time
let session = document.getElementById('session');
let hrs = document.querySelector('#hours');
let min = document.querySelector('#minutes');
let sec = document.querySelector('#seconds');

function showTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    if (hours >= 12) {
        session.innerHTML = "PM";
    }else{
        session.innerHTML = "AM";
    }

    hrs.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
}
setInterval(showTime, 10);
