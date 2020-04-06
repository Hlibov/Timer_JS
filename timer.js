//Timer

  let deadline = '2020-04-08';

  function getTimeRemaining(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date()),
      days = Math.floor((t / 1000 / 60 / 60 / 24)),
      hours = Math.floor((t / 1000 / 60 / 60) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);
    if (t > 0) {
      return {
        total: t,
        seconds: seconds,
        minutes: minutes,
        hours: hours,
        days: days
      };
    } else {
      return {
        total: t,
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0
      };
    }
  }

  // добавление пред однозначными значениями ноля

  function checkDateFormat(n) {
    if (n < 10) {
      return "0" + n;
    } else {
      return n;
    }
  }

  function setClock(id, endTime) {
    let timer = document.getElementById(id),
      days = timer.querySelector('.days'),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let objTime = getTimeRemaining(endTime);

      for (let property in objTime) {
        objTime[property] = checkDateFormat(objTime[property]);
      }
      days.textContent = objTime.days;
      hours.textContent = objTime.hours;
      minutes.textContent = objTime.minutes;
      seconds.textContent = objTime.seconds;

      if (objTime.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('timer', deadline);
});
