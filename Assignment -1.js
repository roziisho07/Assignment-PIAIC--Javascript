"use strict";

//Q2

const namePerson = "Zia Khan";
console.log(`Hello ${namePerson}, would you like to learn some Python today?`);

//Q3
console.log(namePerson.toLowerCase());
console.log(namePerson.toUpperCase());
console.log(
  namePerson
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(" ")
);

//Q4
console.log(
  `Viktor E. Frankl once said, “Those who have a 'why' to live, can bear with almost any 'how'.”`
);

//Q 5
const famousPerson = "Viktor E. Frankl";
const famousQuote =
  "Those who have a 'why' to live, can bear with almost any 'how'";

console.log(`${famousPerson} once said, "${famousQuote}"`);

//Q6
const whiteSpaceName = " 'Jhony\tDep\tp' ";
// console.log(whiteSpaceName);
console.log(whiteSpaceName);

//Q7 //Q8
console.log(5 + 3);
console.log(10 - 2);
console.log(16 / 2);
console.log(4 * 2);

//Q9

const favNumber = 7;
const message = `My fav number is ${favNumber}`;
console.log(message);

//Q10

// Midi Generator Progra:

//Q11
const names = ["Ali", "Fareed", "Basit", "Babul"];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

//Q12
console.log(`${names[0]} where are you?`);
console.log(`${names[1]} where are you?`);
console.log(`${names[2]} where are you?`);
console.log(`${names[3]} where are you?`);

//Q13
const listTransportation = ["Audi", "Private Jet", "Honda 70cc"];

console.log(`I would love own an ${listTransportation[0]} car`);
console.log(`My friend thinks he will own a ${listTransportation[1]}`);
console.log(`Meanwhile I can only afford a ${listTransportation[2]}`);

//Q14
let listGuests = ["Imran Khan", "Shehbaz Sharif", "Quaid-e-Azam"];

listGuests.map((m) =>
  console.log(`${m} you are invited to the dinner at my place`)
);

//Q15

console.log(`${listGuests[2]} cant make it to the dinner because he is dead`);

//Q16

listGuests.pop();
listGuests.push("Asif Zardari");
listGuests.map((m) =>
  console.log(`${m} you are invited again to the dinner at my place`)
);

//Q16

console.log(`I just found a bigger Table for the dinner`);

listGuests.unshift("Marrium Nawaz");

listGuests.map((m) =>
  console.log(`${m} you are invited again to the dinner at my place`)
);

//Q17
console.log(listGuests);
console.log(`Table cant arrive in time, Only two guests are invited`);
for (let i = 0; i < listGuests.length; i++) {
  console.log(`Sorry I cant invited you ${listGuests[i]} `);
  listGuests.splice(i, 1);
}
console.log(listGuests);

for (let i = listGuests.length - 1; i >= 0; i--) {
  console.log(`removed ${listGuests[i]} `);
  listGuests.splice(i, 1);
}
console.log(`All the guests are removed from the list`);

//Q 18

let placesToVisit = ["Berlin", "Tanzania", "New York", "Texas", "Khorogh"];

console.log(placesToVisit);
console.log([...placesToVisit].reverse());
console.log(placesToVisit);
placesToVisit.reverse();
console.log(placesToVisit);
placesToVisit.reverse();
console.log(placesToVisit);
placesToVisit.sort();
console.log(placesToVisit);
placesToVisit.sort().reverse();
console.log(placesToVisit);

//Q19
console.log(`there are ${listGuests.length} Guests comming to the dinner`);

//Q20

const listMountains = [
  "Mount Everest",
  "K2",
  "Rakaposhi",
  "Batura",
  "Shispere",
];

listMountains.map((value, index) => console.log(`${index}. ${value}`));

//21
const ListObject = { ...listMountains };
console.log(ListObject);

//22

//23

let car = "Audi";
console.log(car === "Audi" ?? true);

let firstName = "Mohit";
console.log(firstName == "Mohit" ? true : false);

let secondName = "Khan";
console.log(secondName === "Khan" ? true : false);

console.log(secondName == "Khan");
console.log(car === "Audi");

console.log(car === "BMW" ? true : false);
console.log(car === "Au" ?? true);
console.log(car === "Altis");
console.log(car !== "Honda" ?? false);
console.log(car !== "Audi" ? true : false);

// Q24
console.log(`Question 24`);
car = "audi";
console.log(car === car.toLowerCase());
console.log(car === car.toUpperCase());
const checkNumber = 10;
console.log(checkNumber > 1 ?? true);
console.log(checkNumber >= 100 ? true : false);
console.log(checkNumber < 100 ? true : false);
console.log(checkNumber > 1 && checkNumber < 100);
console.log(checkNumber > -1 || checkNumber < 10);

let checkArray = [10, 20, 30];
console.log(Array.isArray(checkArray));
console.log(checkArray.includes(10));
console.log(checkArray.includes(200));

console.log("Question Number 25");

let alienColor = "green";

if (alienColor === "green") {
  console.log("Player has earned 5 points");
}

if (alienColor === "Pink") {
  console.log("Player has earned 5 points");
}

if (alienColor === "green") {
  console.log("Player has earned 10 points");
} else if (alienColor === "yellow") {
  console.log("the player has earned 10 points");
} else if (alienColor === "red") {
  console.log("the player has earned 15 points");
}

console.log("Question no 28");

let personAge = 75;

if (personAge < 2) {
  console.log("the person is a baby");
} else if (personAge >= 2 && personAge < 4) {
  console.log("the person is a toddler");
} else if (personAge >= 4 && personAge < 13) {
  console.log("the person is a kid");
} else if (personAge >= 13 && personAge < 20) {
  console.log("person is a teenager");
} else if (personAge >= 20 && personAge < 65) {
  console.log("the person is an adult");
} else if (personAge >= 65) {
  console.log("the person is an elder");
}

console.log("Question no 29");

let favFruit = ["mangoes", "bananas", "apples", "pineapple", "apricots"];

if (favFruit.includes("mangoes")) {
  console.log("You really like mangoes");
}
if (favFruit.includes("bananas")) {
  console.log("You really like bananas");
}
if (favFruit.includes("apples")) {
  console.log("You really like apples");
}
if (favFruit.includes("bluberry")) {
  console.log("You really like bluberry");
}
if (favFruit.includes("apricots")) {
  console.log("You really like apricots");
}

console.log("question no 30, 31");

let usernames = ["admin", "bob", "jonas", "ali", "junaid"];
// usernames = [];
if (!usernames) {
  console.log("We need to find some users");
} else if (usernames) {
  for (const user of usernames) {
    if (user === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${user}, thank you for logging in again`);
    }
  }
}

console.log("question 32");

const currentUsers = ["bob", "jonas", "ali", "junaid", "rashid"];
const newUsers = ["ali", "babul", "RAHIM", "junaid", "hassan"];

for (const user of newUsers) {
  if (user.toUpperCase() === user) {
    console.log("Username can only consist of lowercase alphabets");
  }
  if (currentUsers.includes(user)) {
    console.log("Username already exists please try a different username");
  }
}

console.log("Question no 33");

const ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of ordinalNumbers) {
  if (number === 1) {
    console.log(`1st`);
  } else if (number === 2) {
    console.log("2nd");
  } else if (number === 3) {
    console.log("3rd");
  } else {
    console.log(`${number}th`);
  }
}

console.log("Question 34");

const pizzaArr = [
  "Neapolitan Pizza",
  "Chicago Pizza",
  "Fajita Pizza",
  "Garlic Pizza",
  "Peperoni Pizza",
  "Margherita  Pizza",
  "Detroit Pizza",
  "BBQ Chicken Pizza",
];

for (const pizza of pizzaArr) {
  console.log(`i like ${pizza}`);
}
console.log("I really like Pizza");

console.log("Question no 35");
const listAnimals = ["dog", "cat", "parrot"];
for (let i = 0; i < listAnimals.length; i++) {
  // console.log(listAnimals[i]);
  console.log(`A ${listAnimals[i]} would make a great pet`);
}
console.log("any of these animals would make a great pet");

//36
console.log("Question no 36 an 37");

const makeShirts = function (size = "large", text = "I love Javascript") {
  if (size === "medium") {
    console.log(`Shirt size: ${(size = "medium")}, Shirt Text: Geeks`);
  } else {
    console.log(`Shirt size: ${size}, Shirt Text: ${text}`);
  }
};
makeShirts("large", "Hello from the mountains");
makeShirts("Extra large", "I love Python");
makeShirts("medium");

//38

const describeCity = function (city, country = "Pakistan") {
  console.log(`${city} is in ${country}`);
};

describeCity("Karachi");
describeCity("Lahore");
describeCity("Huston", "USA");
//39
console.log("Question 39");
const cityCountry = function (city, country) {
  console.log(`"${city}", "${country}"`);
};

cityCountry("Lahore", "Pakistan");
cityCountry("Multan", "Pakistan");
//40
console.log("Question no 40");

const MakeAlbum = function (nameArtist, titleAlbum, numTrack) {
  this.nameArtist = nameArtist;
  this.titleAlbum = titleAlbum;
  this.numTrack = numTrack;
};

const ali = new MakeAlbum("Ali Zafar", "Jhoom", 3);
const kendrik = new MakeAlbum("Kendrik Lamar", "Damn", 1);

console.log(ali);
console.log(kendrik);

// 41
console.log("Question No 41");
let magicians = ["harry", "mockey", "Dragono", "Mikamor"];

const showMagician = function (arrMagician) {
  for (const name of arrMagician) {
    console.log(name);
  }
};
showMagician(magicians);

//42 43
console.log("Question No 42, 43");

const makeGreat = function (arr) {
  arr.forEach((element, index) => {
    arr[index] = `The great ${element}`;
  });
};

makeGreat(magicians);
showMagician(magicians);

//44
console.log("Question No44 ");

const itemSandwich = ["bread", "chicken", "mayo", "lettuce leaves"];

const makeSandwich = function (items) {
  console.log(`Your sandwich is being prepared with:`);
  for (const item of items) {
    console.log(item);
  }
  console.log();
};
makeSandwich(itemSandwich);

class CarCl {
  constructor(make, model, speed) {
    this.make = make;
    this.speed = speed;
    this.model = model;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }
}

const ford = new CarCl("Ford", "B12Xy", 120);
console.log(ford);

ford.accelerate();
ford.accelerate();
ford.brake();
