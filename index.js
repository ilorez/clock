const timePlace = [...document.querySelector("[data-place]").children]
setInterval(() => {
    const today = new Date();
    const hour = today.getHours() ;
    const minute = today.getMinutes();
    const second = today.getSeconds();
    const hourbar = document.querySelector(".hour")
    const secondbar = document.querySelector(".second")
    const munitebar = document.querySelector(".minute")
    timePlace[0].innerHTML = (hour).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}); 
    timePlace[1].innerHTML = (minute).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}); 
    timePlace[2].innerHTML = (second).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    hourbar.style.setProperty('transform', `rotate(${hour*30}deg) translate(0px,-30%)`);
    secondbar.style.setProperty('transform', `rotate(${second*6}deg) translate(0px,-30%)`);
    munitebar.style.setProperty('transform', `rotate(${minute*6}deg) translate(0px,-30%)`);
}, 1000);
