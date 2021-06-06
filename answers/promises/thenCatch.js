const weather = require("./modules.js");

const checkWeather = () => {
  weather
    .then((fulfilled) => {
      console.log(fulfilled);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

checkWeather();
