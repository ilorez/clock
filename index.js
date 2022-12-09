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
    console.log([second])
    // this party here for make the (bar or hand) of seconds don't look like go back from 354deg to 0deg in transition from 59s to 0s
    // in code it's go back but in screen it's look like it's contune 
    if(second === 0){secondbar.style.setProperty('transition', '0s')}else{
        secondbar.style.setProperty('transition', 'all 0.05s')
    }
    ////////////////////////////////////////////////////////////////////
    secondbar.style.setProperty('transform', `rotate(${second*6}deg) translate(0px,-30%)`);
    munitebar.style.setProperty('transform', `rotate(${minute*6}deg) translate(0px,-30%)`);
}, 1000);
