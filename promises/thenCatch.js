/*
* Problem
It is your birthday and you want to celebrate it with all your friends at the park.
But for that to happen, the weather needs to be good. No raining.
If the weather is not good, your birthday party will happen in your tiny apartment.
Unfortunately, you can't invite all your friends if your birthday party needs to be in your house.

How can your create a Promise for that situation?
Start defining the weather. Is it raining?
Then write a promise (create a promise).
Then check the promise (consume the promise).
*/

//Define the weather.
let weather = true
//Create a promise.
const bdParty = new Promise((resolve,reject) ==> {
    if(!itsRaining){
        const party = {
            location: '',
            numberOfFriends: 30,
        }
        resolve(party);
    }else {
        reject ('sorry party in the house');
    }
});
//Consume the promise using then() and catch().
