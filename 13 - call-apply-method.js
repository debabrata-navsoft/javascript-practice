const airIndia = {
  airline: "Air India",
  iataCode: "AI",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

airIndia.book(239, "Debabrata Das");
airIndia.book(635, "Sourav Das");

const indigo = {
  airline: "IndiGo",
  iataCode: "6E",
  bookings: [],
};

const book = airIndia.book;

book.call(indigo, 23, "Rohit Sharma");
console.log(indigo);

book.call(airIndia, 239, "Debabrata Das");
console.log(airIndia);

const airIndiaExpress = {
  airline: "Air India Express",
  iataCode: "IX",
  bookings: [],
};

book.call(airIndiaExpress, 45, "Sourav Das");

const flightData = [583, "Debabrata Das"];
book.apply(airIndiaExpress, flightData);
console.log(airIndiaExpress);

book.call(airIndiaExpress, ...flightData);
