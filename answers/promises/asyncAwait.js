let isRaining = false;
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

const checkWeather = async () => {
  try {
    const result = await birthdayParty;
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};

checkWeather();
