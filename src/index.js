var timeEl = document.getElementById('time-el');
var darkMode = document.getElementById('dark-mode');
setInterval(function () {
    timeEl.innerText = "Your current time is: ".concat(new Date().toLocaleTimeString());
}, 1000);
