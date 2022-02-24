var timeEl = document.getElementById('time-el');
var darkMode = document.getElementById('darkmode');
setInterval(function () {
    timeEl.innerText = "Your current time is: ".concat(new Date().toLocaleTimeString());
}, 1000);
darkMode === null || darkMode === void 0 ? void 0 : darkMode.addEventListener('click', function () {
    console.log("Hi");
    document.classList.toggle('dark-theme');
});
