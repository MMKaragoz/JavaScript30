// Numbers


let age = 100;
let age2 = age;
console.log(age, age2);

age = 200;
// age2 = 200;
console.log(age, age2);


// Strings

let name = 'Wes';
let name2 = name;
console.log(name, name2);

name = 'Wesley';
console.log(name, name2);


// Booleans

let isTrue = true;
let isTrue1 = isTrue;
console.log(isTrue, isTrue1);

isTrue1 = false;
console.log(isTrue, isTrue1);


// Arrays

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players;
console.log(players, team);

team[3] = 'Lux';
console.log(players, team);

// Since players has changed, we need to copy the players. After that we can change as we wanted.

// one way for copy
const team2 = players.slice();
console.log(players, team2);

team2[3] = 'Max';
console.log(players, team2);

// with concat
const team3 = [].concat(players);
console.log(players, team3);

team3[1] = 'Brian';
console.log(players, team3);

// with ES6 Spread
const team4 = [...players];
console.log(players, team4);

team4[2] = 'Walter';
console.log(players, team4);

// with Array.from()
const team5 = Array.from(players);
console.log(players, team5);

team5[0] = 'John';
console.log(players, team5);


// Objects

const person = {
    name: 'Wes Bos',
    age: 80
};

// const captain = person;
// console.log(person, captain);

// captain.number = 99;
// console.log(person, captain);

// Copy
const cap2 = Object.assign({}, person, {number: 99, age: 12});
console.log(person, cap2);

// with ES6 Spread
const cap3 = {...person};
console.log(person, cap3);

cap3.number = 48;
console.log(person, cap3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
    name: 'Wes',
    age: 100,
    social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
    }
}
// const dev = Object.assign({}, wes);
// console.log(wes, dev);

// dev.social.twitter = '@coolman';
// console.log(wes, dev); // wes changed

// without changing

const dev2 = JSON.parse(JSON.stringify(wes));
console.log(wes, dev2);

dev2.social.twitter = '@coolman0';
console.log(wes, dev2);