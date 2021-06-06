const birthdayParty = new Promise((resolve, reject) => {
  let isRaining = true;
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

module.exports = birthdayParty;
