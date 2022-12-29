# Snow Alerts

Currently, this only works for Maggie Valley, NC (not the skip capital of the world, but an easy day trip from Atlanta if there is enough snow)

### Goals
- checks the forecast for snow and sends alerts via text, email, and maybe even via a push notification in the future

### Todo
- text working, started with `messagebird` because API looked dead simple and it would be cheaper than twilio, but getting 400 when sending test from the portal
- find email lib
- decide on webapp vs. swift vs. react native vs. flutter