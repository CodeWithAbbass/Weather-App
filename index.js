// Formula
// (F-32)x5/9=C
import { TempColorAndImg, debounceFunc, getDate } from "./Helpers.js";
const ConvertInput = document.querySelector(".convert_input");
const ConvertBtn = document.querySelector(".convert_btn");
const TempCelsius = document.querySelector(".temp_Celsius_num");
const MinTemp = document.querySelector(".Extra_Info_Min strong");
const MaxTemp = document.querySelector(".Extra_Info_Max strong");
const State = document.querySelector(".State");
const SearchInput = document.querySelector(".Search_Input");
const SearchBtn = document.querySelector(".Search_Icon");

const TempratureConverter = () => {
  TempCelsius.innerText = Math.ceil(((ConvertInput.value - 32) * 5) / 9);
  TempColorAndImg();
};

ConvertBtn.addEventListener("click", TempratureConverter);

const DecoratedFunc = debounceFunc(getDate, 60000);
DecoratedFunc();

const getWeather = async (city = "Lahore") => {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2eaefa5006msh4b33348c356b864p1ed544jsnc7d5a8ca1063",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.temp) {
      MinTemp.textContent = data.min_temp;
      MaxTemp.textContent = data.max_temp;
      TempCelsius.textContent = data.temp;
      State.textContent = city;
      TempColorAndImg();
    } else {
      const error = new Error(
        "City Cannot Found. Please Try Again With Correct City Name"
      );
      alert(error);
    }
  } catch (error) {
    console.log(error);
  }
};
getWeather();

SearchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWeather(SearchInput.value);
  }
});
SearchBtn.addEventListener("click", (e) => {
  if (SearchInput.value.length >= 3) {
    getWeather(SearchInput.value);
  }
});
