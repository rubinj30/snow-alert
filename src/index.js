#!/usr/bin/env node

require("dotenv").config();
const cron = require("node-cron");

const { formatOutput } = require("./formatOutput");
const sendAlerts = require("./send");
const { getForecast } = require("./data/getForecast");

// const city = "Maggie Valley";
// const state = "NC";
// const city = "Westfield"
// const state = "VT"
const city = "Telluride";
const state = "CO";

(async function main() {
  console.log(`Started snow alert service for ${city}, ${state} (check at 8pm)`);

  const cronTime = "0 21 * * *"; // 8:00 PM

  cron.schedule(cronTime, async () => {
    const today = new Date().toDateString();
    console.log(today);

    snowAlert();

    console.log("\n");
  });
})();

async function snowAlert() {
  try {
    const forecasts = await getForecast(city, state);
    const location = `${city}, ${state}`;
    const output = formatOutput(forecasts, location);
    sendAlerts(output);
  } catch (err) {
    console.error(err);
  }
}
