function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log("Hello");

// Interpolated
console.log("Hello I am a %s ", "student");

var var1 = "student";
console.log(`Hello I'm a ${var1} `);

// Styled
console.log("%c I am some great text", "font-size: 50px; background: blue; color: white;");

// Warning!
console.warn("OH NO!");

// Error
console.error("Error!");

// Info
console.info("Hello World!")

// Testing
console.assert(1 === "1", "That's wrong!")

const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), "That's wrong!");

// Clearing
console.clear();

// Viewing DOM Elements
console.log(p);
// console.dir(p);

// Grouping Together
const dogs = [{ name: "Snickers", age: 2}, { name: "Hugo", age: 8}];

dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
    console.log(`This is ${dog.name}.`);
    console.log(`${dog.name} is ${dog.age} years old.`)
    console.groupEnd(`${dog.name}`);
})

// Counting
console.count('Mert');
console.count('Mert');
console.count('Karagöz');
console.count('Mert');
console.count('Mert');
console.count('Karagöz');

// Timing
console.time("fetching data")
fetch("https://api.github.com/users/wesbos")
    .then(data => data.json())
    .then(data => {
        console.timeEnd("fetching data")
        console.log(data);
});


console.table(dogs);