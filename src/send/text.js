require("dotenv").config();

const { TWILIO_AUTH_TOKEN, TWILIO_ACCOUNT_SID } = process.env;

var client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

function verifyNumber(number) {
  client.lookups.v1
    .phoneNumbers(`+1${number}`)
    .fetch({ type: ["carrier"] })
    .then((phone_number) => console.log(phone_number.carrier))
    .catch((err) => console.log("Verifying number error ->", err));
}

function sendText(message) {
  let number = "7707894601";
  client.messages
    .create({
      body: message,
      from: "+16812022827",
      // to: "+14047133906",
      to: `+1${number}`,
    })
    .then((message) => console.log(message))
    .catch((err) => console.log("Err", err));
}

module.exports = {
  sendText,
};
