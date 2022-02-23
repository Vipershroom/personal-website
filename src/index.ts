let timeEl = document.getElementById('time-el')

setInterval(() => {
    timeEl!.innerText = `Your current time is: ${new Date().toLocaleTimeString()}`
}, 1000)