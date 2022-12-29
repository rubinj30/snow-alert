require("dotenv").config();
const { EMAIL, GOOGLE_GEN_PW } = process.env;


const nodemailer = require("nodemailer");

function sendEmail(message) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: false,
      port: 587, // default port for insecure
      auth: {
        user: EMAIL,
        pass: GOOGLE_GEN_PW,
      },
    });

    const mailOptions = {
      from: '"Cataloochee" <jonathan.a.rubin@gmail.com>',
      to: "jonathan.a.rubin@gmail.com",
      subject: "Snow Alert",
      text: message,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        const errMsg = err.response || "Unknown error";
        reject(`Error sending email alert(s) - ${errMsg}`);
      } else {
        resolve("Alert(s) sent successfully.");
      }
    });
  });
}

module.exports = {
    sendEmail
}