function formatOutput(forecast, location) {
  // I could print out each day, but it'd probably be better to get
  // the total snow fall from next 2 weeks, 1 week, 3 days, tomorrow
  // and put into one string to be texted / emailed
  let nextWeek = 0,
    nextTwoWeeks = 0;
  forecast.forEach((day, i) => {
    const snowDepth = day.snow;
    if (i < 7) {
      nextWeek += snowDepth;
      nextTwoWeeks += snowDepth;
    }
    if (i >= 7 && i < 14) {
      nextTwoWeeks += snowDepth;
    }
  });

  const tomorrow = forecast[0].snow;
  const output = formatMessage(tomorrow, nextWeek, nextTwoWeeks, location);
  return output;
}

const formatMessage = (tomorrow, nextWeek, nextTwoWeeks, location) => {
  const message =
    `--\nSnowcast ${location ? `for ${location}` : ""}:\n` +
    `Tomorrow  - ${tomorrow.toFixed(2)} inches\n` +
    `7 days    - ${nextWeek.toFixed(2)} inches\n` +
    `14 weeks  - ${nextTwoWeeks.toFixed(2)} inches\n`;
  return message;
};

module.exports = {
  formatOutput,
};
