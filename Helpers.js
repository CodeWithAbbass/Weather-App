const TempNum = document.querySelector(".temp_num");
const TempImg = document.querySelector(".temp_img");
const TempCelsius = document.querySelector(".temp_Celsius_num");
const Day = document.querySelector(".header_Day");
const Hours = document.querySelector(".Hours");
const Minutes = document.querySelector(".Minutes");
const Period = document.querySelector(".Period");

const TempColorAndImg = () => {
  if (TempCelsius.textContent > 21) {
    TempNum.style.color = "red";
    TempImg.style.backgroundImage = "url('./Assets/Sun.png')";
  } else if (TempCelsius.textContent < 10) {
    TempNum.style.color = "red";
    TempImg.style.backgroundImage = "url('./Assets/Snow.png')";
  } else {
    TempImg.style.backgroundImage = "url('./Assets/Sun.png')";
    TempNum.style.color = "green";
  }
};


const debounceFunc = (func, delay) => {
  let TimeoutID;
  return function () {
    if (!TimeoutID) {
      func();
    }
    TimeoutID = setInterval(() => {
      func();
    }, delay);
  };
};

const getDate = () => {
  const date = new Date();
  const DayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dateNum = date.getDay();
  Day.innerText = DayArr[dateNum];
  if (date.getMinutes() < 10) {
    Minutes.innerText = `0${date.getMinutes()}`;
  } else {
    Minutes.innerText = date.getMinutes();
  }
  const CurrentHour = date.getHours();
  if (date.getHours() > 11) {
    Period.innerText = "pm";
    if (CurrentHour - 12 === 0) {
      Hours.innerText = CurrentHour;
    } else {
      Hours.innerText = CurrentHour - 12;
    }
  } else {
    Period.innerText = "am";
    Hours.innerText = CurrentHour;
  }
};
export { TempColorAndImg, debounceFunc, getDate };
