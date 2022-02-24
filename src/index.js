var timeEl = document.getElementById('time-el');
setInterval(function () {
    timeEl.innerText = "Your current time is: ".concat(new Date().toLocaleTimeString());
}, 1000);
