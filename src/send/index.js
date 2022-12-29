const { sendText } = require("./text");
const { sendEmail } = require("./email");

function sendMessage(message) {
  sendText(message);
  sendEmail(message);
}

module.exports = sendMessage;
