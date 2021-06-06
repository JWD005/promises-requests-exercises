let isRaining = true;
const birthdayParty = new Promise((resolve, reject) => {
  if (!isRaining) {
    const venue = {
      local: "Centennial Park",
      friends: 30,
    };
    resolve(venue);
  } else {
    const reason = new Error("Sorry, in house birthday party.");
    reject(reason);
  }
});
const checkWeather = () => {
  birthdayParty
    .then((fulfilled) => {
      console.log(fulfilled);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

checkWeather();
