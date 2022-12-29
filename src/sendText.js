// var messagebird = require("messagebird")("eRL5ga696DVHXyiPSxuJ2ZWi0sLFuKD2");

// test key
var messagebird = require("messagebird")("XUr8UFkuI8w5M8341axnNvcmZ");

var params = {
  originator: "TestMessage",
  recipients: ["7707894601"],
  body: "This is a test message",
};

messagebird.messages.create(params, function (err, response) {
  if (err) {
    return console.log(err);
  }
  console.log(response);
});
