# Snow Alerts

Currently, this only works for Maggie Valley, NC (not the skip capital of the world, but an easy day trip from Atlanta if there is enough snow)

### Goals
- checks the forecast for snow and sends alerts via text, email, and maybe even via a push notification in the future

### Todo
- create a UI
- find something like cron to trigger sending daily on raspberry pi

### Setup
if ever setting this up in the future on another comp, add an `.env` file to the root directory and include the following variables:
- `TWILIO_AUTH_TOKEN`="value"
- `TWILIO_ACCOUNT_SID`="value"
- `WEATHERBIT_API_KEY`="value"
- `EMAIL`="value"
- `PW`="value"
- `GOOGLE_GEN_PW`="value"