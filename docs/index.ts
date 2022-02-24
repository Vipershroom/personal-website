let timeEl = document.getElementById('time-el')
let darkMode = document.getElementById('dark-mode')


setInterval(() => {
    timeEl!.innerText = `Your current time is: ${new Date().toLocaleTimeString()}`
}, 1000)