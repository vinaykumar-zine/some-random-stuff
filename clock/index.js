
setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
 
    hour-hand.style.transform = `rotate(${hr_rotation}deg)`;
    minute-hand.style.transform = `rotate(${min_rotation}deg)`;
    second-hand.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);