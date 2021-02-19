//Setting date to countdown to
let countDownDate = new Date("Jan 01,2022 00:00:00").getTime();

//countdown by seconds to mins to hours to days
    let myfunc = setInterval(function() {
        let now = new Date().getTime();
        let timeleft = countDownDate - now;

    // setting days, hours, mins and secs to go 
    // 1000 milliseconds, 60 secs, 60 mins, 24 hours 
        let days = Math.floor(timeleft /(1000 * 60 * 60 * 24));
        let hours = Math.floor((timeleft %(1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeleft % (1000 *60 *60)) / 1000 * 60))
        let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        