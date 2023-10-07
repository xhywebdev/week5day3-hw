function currentTime() {
    var d = new Date();
    var utchr = d.getUTCHours();

    var hr = d.getHours();
    var timeDiff = utchr - hr;
    // console.log(timeDiff)
    var timeZone;
    if (Math.abs(timeDiff) == 7) {
        timeZone = ' PT';
    } else if (Math.abs(timeDiff) == 6) {
        timeZone = ' MT';
    } else if (Math.abs(timeDiff) == 5) {
        timeZone = ' CT';
    } else if (Math.abs(timeDiff) == 4) {
        timeZone = ' ET';
    }

    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm;

    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 0) {
        min = "0" + min;
    }

    if (hr == 12) {
        ampm = "PM";
    } else if (hr > 12) {
        hr -= 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    var time = hr + ":" + min + ":" + sec + " " + ampm;
    document.getElementById("clock").innerText = time;
    document.getElementById("timeZone").innerText = timeZone;
}

setInterval(currentTime, 1000);
