const element_clock = document.querySelectorAll('.clock');
function def () {
    element_clock.forEach((x) => {
        let a = '';
        if (x.classList.contains('istanbul')) a = formatter('Europe/Istanbul');
        if (x.classList.contains('newyork')) a = formatter('America/New_York');
        if (x.classList.contains('london')) a = formatter('Europe/London');
        if (x.classList.contains('berlin')) a = formatter('Europe/Berlin');
        const now = new Date();
        const hour = a;
        const minute = now.getMinutes();
        const second = now.getSeconds();

        x.children[1].style.transform = `rotate(${hour * 30 + minute * 0.5}deg)`;
        x.children[2].style.transform = `rotate(${minute * 6 + second * 0.1}deg)`;
        x.children[3].style.transform = `rotate(${second * 6}deg)`;
    });
}
function formatter (timeZone) {
    let locales = '';
    if (timeZone === 'Europe/Istanbul') locales = 'tr-TR';
    if (timeZone === 'America/New_York') locales = 'en-US';
    if (timeZone === 'Europe/London') locales = 'en-GB';
    if (timeZone === 'Europe/Berlin') locales = 'de-DE';

    const now = new Date();
    const formatter_us = new Intl.DateTimeFormat( locales,
        {
            timeZone: timeZone,
            hour12: false,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
    const a = formatter_us.format(now).split(':');
    return Number(a[0]);
}

setInterval(def,1000);


