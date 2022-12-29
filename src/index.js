const { mockCurrentData, mockForecastData } = require("./mocks");
const { checkForecastForSnow } = require("./checkForecastForSnow");
const { sendText } = require("./send/text");
const axios = require('axios');
const lat = "83.0976";
const lon = "35.5182";
const city = "Maggie Valley";
const state = "NC";
const country = "US";

const { API_KEY } = process.env;

async function fetchData(url) {
  const response = await axios.get(url);
  console.log("fetcheddata", response);
  return response.data;
}

async function getForecast() {
  const forecast_url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  // const forecast_url = `https://api.openweathermap.org/daily/2.5/forecast?daily?city=${city}&state=${state}&country=${country}&appid=${API_KEY}`;
  // const forecast_url = `https://api.openweathermap.org/data/2.5/forecast?daily?city=${city}&state=${state}&country=${country}&appid=${API_KEY}`;
  const forecastData = await fetchData(forecast_url);
  // const forecastData = mockForecastData;
  const msg = checkForecastForSnow(forecastData);
  console.log(msg);
  return msg;
}

function getWeatherData(lat, lon) {
  console.log("> Getting weather data...");

  const current_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  // current_data = fetch_data(current_url)
  const current_data = mockCurrentData;
  // forecast_data = fetch_data(forecast_url)
  const forecast_data = mockForecastData;

  // console.log("Current Data:");
  // console.log(Object.keys(current_data));
  // console.log("--------");

  // console.log("Forecast Data:");
  // console.log(Object.keys(forecast_data));
  // console.log(forecast_data["message"]);
  // console.log(Object.keys(forecast_data["list"][0]));
  // console.log("City >>>> ", forecast_data["city"]);
  // console.log("--------");

  // Extract the relevant weather current_data
  const temperature = current_data["main"]["temp"];
  const description = current_data["weather"][0]["description"];
  let snow = {};
  // if (current_data["snow"]) {
  //   console.log("Snow: ", current_data["snow"]);
  //   snow = current_data["snow"];
  // } else {
  //   console.log("Snow else:");
  // }

  return { temperature, description, snow };
}

function send_email(subject, body) {
  const msg = `Subject: ${subject}\n\n${body}`;
}

function checkSnow() {
  // Get the weather data for Maggie Valley, NC
  const { temperature, description, snow } = getWeatherData(
    "83.0976",
    "35.5182"
  );
  // console.log(
  //   "get_weather_data results... >>> ",
  //   temperature,
  //   description,
  //   snow
  // );
}

async function sendForecast() {
  const msg = await getForecast();
  sendText(msg);
}

checkSnow();
sendForecast();
