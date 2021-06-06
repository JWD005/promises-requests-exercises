const weather = require("./modules.js");

const checkWeather = async () => {
  try {
    const result = await weather;
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};

checkWeather();
