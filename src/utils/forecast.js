const request = require("request");

const forecast = (lati, longi, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=7432b74314b4081828deee2a01201cfa&query=" +
    lati +
    "," +
    longi +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}  the current temperature is ${body.current.temperature} it feels like ${body.current.feelslike}`
      );
    }
  });
};

module.exports = forecast;
