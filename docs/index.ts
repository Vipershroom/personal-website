let timeEl = document.getElementById('time-el')
let darkMode = document.getElementById('darkmode')


setInterval(() => {
    timeEl!.innerText = `Your current time is: ${new Date().toLocaleTimeString()}`
}, 1000)