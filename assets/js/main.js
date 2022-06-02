
let inputDate = document.querySelector('#inputDate');
let dayOut = document.querySelector('#dayOut');
let hourOut = document.querySelector('#hourOut');
let minOut = document.querySelector('#minOut');
let secOut = document.querySelector('#secOut');



const knoedelCount = () => {
    let knoedelFest = new Date(inputDate.value);
    let today = new Date();
    let todayMs = knoedelFest.getTime() - today.getTime();
    let knoedelDays = todayMs / 1000 / 60 / 60 / 24;
    let daysAusgabe = Math.floor(knoedelDays);
    let knoedelHours = (knoedelDays - daysAusgabe) * 24;
    let hoursAusgabe = Math.floor(knoedelHours);
    let knoedelMinutes = (knoedelHours - hoursAusgabe) * 60;
    let minutesAusgabe = Math.floor(knoedelMinutes);
    let knoedelSeconds = (knoedelMinutes - minutesAusgabe) * 60;
    let secondsAusgabe = Math.floor(knoedelSeconds);
    dayOut.innerHTML = daysAusgabe;
    hourOut.innerHTML = hoursAusgabe;
    minOut.innerHTML = minutesAusgabe;
    secOut.innerHTML = secondsAusgabe;
    setInterval(knoedelCount, 1000);
}

