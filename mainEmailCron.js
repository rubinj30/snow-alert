#!/usr/bin/env node

require("dotenv").config();

const axios = require("axios");
const cron = require("node-cron");
const path = require("path");
const { formatOutput } = require("./src/formatOutput");
const { sendText } = require("./src/send/text");
const { getForecast } = require("./src/data/getForecast");
const { sendEmail } = require("./src/send/email");

const { EMAIL, PW, WEATHERBIT_API_KEY, GOOGLE_GEN_PW } = process.env;

// const city = "Maggie Valley";
// const state = "NC";
// const city = "Westfield"
// const state = "VT"
// const country = "US";
const city = "Telluride";
const state = "CO";

(async function main() {
  console.log("Started weather alert service.");

  const cronTime = "0 21 * * *"; // 8:00 PM

  // cron.schedule(cronTime, async () => {
  //   const today = new Date().toDateString();
  //   console.log(today);

  try {
    const forecasts = await getForecast();
    const output = formatOutput(forecasts, `${city}, ${state}`);
    sendEmail(output);
    sendText(output);
  } catch (err) {
    // const errMsg = err.response.data.error || "Unknown error";
    console.error(err);
  }

  //   console.log("\n");
  // });
})();
