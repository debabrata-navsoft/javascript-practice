const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetingHey = greet("Hey");
greetingHey("Debabrata");
greetingHey("Sourav");

greet("Hello")("Rohit");

const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArrow("Hi")("Debabrata");
