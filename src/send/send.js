const { sendText } = require("./text");
const { sendEmail } = require("./email");

function sendMessage(message, location) {
 const msgWithLocation = ``
  sendText(message);
  sendEmail(message);
}

module.exports = {
    sendMessage
}