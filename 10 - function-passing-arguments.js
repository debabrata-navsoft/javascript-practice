const flight = "LH234";
const debabrata = {
  name: "Debabrata Das",
  passport: 1234567890,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 1234567890) {
    console.log("Check in");
  } else {
    console.log("Wrong passport");
  }
};

checkIn(flight, debabrata);
console.log(flight);
console.log(debabrata);

const flightNum = flight;
const passenger = debabrata;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(debabrata);
checkIn(flight, debabrata);
