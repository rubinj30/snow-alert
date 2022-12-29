const { mockForecastData } = require("./mocks");

function checkForecastForSnow(data) {
  // items are in 3hr increments
  // so each "time" is 3hrs apart
  const snowTimes = data.list.filter((time) => {
    return !!time["snow"];
  });

  const listOfSnow = snowTimes.map((time) => {
    const timeDate = new Date(time.dt * 1000 - data.city.timezone * 1000);
    const dateStr = formatDateStr(timeDate);
    const { main, description } = time.weather[0];
    return { dateTime: dateStr, main, description };
  });
  const msg = formatForText(listOfSnow);
  return msg;
}

function formatForText(list) {
  let msg = "Snow in Maggie Valley Forecast...\n";
  list.forEach((item) => {
    msg += item.dateTime + " - " + item.description + "\n";
  });
  return msg;
}

function formatDateStr(date) {
  const options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const dateStr = date.toLocaleTimeString("en", options);
  const formattedDate = dateStr;
  return formattedDate;
}

module.exports = { checkForecastForSnow };
