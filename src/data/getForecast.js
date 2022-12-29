require("dotenv").config();

const { WEATHERBIT_API_KEY } = process.env;
const axios = require("axios");

async function getForecast(city, state) {
  try {
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&state=${state}&country=${country}&key=${WEATHERBIT_API_KEY}&units=I&hours=48`;
    const { data } = await axios.get(url);
    return data.data;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getForecast,
};
