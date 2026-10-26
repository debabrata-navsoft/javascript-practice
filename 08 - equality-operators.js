const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const age = 18;

if (age === 18) console.log("Yoy just become an adult :D (strict)");
if (age == 18) console.log("You just become an adult :D (loose)");

// const fav = Number(prompt("What is your favorite number?"));

rl.question("What is your favorite number? ", (answer) => {
  const fav = Number(answer);
  console.log(typeof fav);

  if (fav === 23) {
    console.log("Cool! 23 is an amazing number!");
  } else if (fav === 7) {
    console.log("7 is also a coll number");
  } else if (fav === 9) {
    console.log("9 is also a cool number");
  } else {
    console.log("Number is not 23 or 7 or 9");
  }

  rl.close();
});
