/*
 * Programming Quiz: Using Let and Const
 */

const CHARACTER_LIMIT = 255;
const posts = [ '#DeepLearning transforms everything from self-driving cars to language translations.' ];

// prints posts to the console
function displayPosts() {
	for (let i = 0; i < posts.length; i++) {
		console.log(posts[i].slice(0, CHARACTER_LIMIT));
	}
}

displayPosts();

/*
 * Instructions: Change the `greeting` string to use a template literal.
 * const myName = '[NAME]';
 * const greeting = 'Hello, my name is ' + myName;
 * console.log(greeting);
 */

const myName = 'Paulina';
const greeting = `Hello, my name is ${myName}`;
console.log(greeting);

/*
 * Programming Quiz: Build an HTML Fragment
 */

// function createAnimalTradingCardHTML(animal) {
// 	const cardHTML = '<div class="card">' +
// 		'<h3 class="name">' + animal.name + '</h3>' +
// 		'<img src="' + animal.name + '.jpg" alt="' + animal.name + '" class="picture">' +
// 		'<div class="description">' +
// 		'<p class="fact">' + animal.fact + '</p>' +
// 		'<ul class="details">' +
// 		'<li><span class="bold">Scientific Name</span>: ' + animal.scientificName + '</li>' +
// 		'<li><span class="bold">Average Lifespan</span>: ' + animal.lifespan + '</li>' +
// 		'<li><span class="bold">Average Speed</span>: ' + animal.speed + '</li>' +
// 		'<li><span class="bold">Diet</span>: ' + animal.diet + '</li>' +
// 		'</ul>' +
// 		'<p class="brief">' + animal.summary + '</p>' +
// 		'</div>' +
// 		'</div>';

// 	return cardHTML;
// }

const cheetah = {
	name: 'Cheetah',
	scientificName: 'Acinonyx jubatus',
	lifespan: '10-12 years',
	speed: '68-75 mph',
	diet: 'carnivore',
	summary:
		'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
	fact:
		'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
};

// creates an animal trading card
function createAnimalTradingCardHTML(animal) {
	const cardHTML = `<div class="card">
        <h3 class="name"> ${animal.name} </h3>
        <img src=" ${animal.name} .jpg" alt=" ${animal.name} " class="picture">
        <div class="description">
            <p class="fact"> ${animal.fact} </p>
            <ul class="details">
                <li><span class="bold">Scientific Name</span>: ${animal.scientificName} </li>
                <li><span class="bold">Average Lifespan</span>: ${animal.lifespan} </li>
                <li><span class="bold">Average Speed</span>: ${animal.speed} </li>
                <li><span class="bold">Diet</span>: ${animal.diet} </li>
            </ul>
            <p class="brief"> ${animal.summary} </p>
        </div>
    </div>`;

	return cardHTML;
}

console.log(createAnimalTradingCardHTML(cheetah));

/*
 * Extract data from arrays and objects into distinct variables.
 */

const point = [ 10, 25, -34 ];

const x = point[0];
const y = point[1];
const z = point[2];

console.log(x, y, z);

/*
 * Extracting values from an object
 */

const gemstone = {
	type: 'quartz',
	color: 'rose',
	carat: 21.29
};

const type = gemstone.type;
const color = gemstone.color;
const carat = gemstone.carat;

console.log(type, color, carat);

/*
 * Destructuring values from an array
 */

const dots = [ 10, 25, -34 ];

const [ a, b, c ] = dots;

console.log(a, b, c);

/*
 * Destructuring values from an object
 */

const something = {
	brand: 'abcdef',
	location: 'nowhere',
	size: 22
};

const { brand, location, size } = something;

console.log(brand, location, size);

/*
 * Programming Quiz: Destructuring Arrays
 *
 * Use destructuring to initialize the variables `one`, `two`, and `three`
 * with the colors from the `things` array.
 */
// const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'mars', 'blue', 'dogs'];

// const one = things;
// const two = '';
// const three = '';

// const colors = `List of Colors
// 1. ${one}
// 2. ${two}
// 3. ${three}`;

// console.log(colors);

const things = [ 'red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'mars', 'blue', 'dogs' ];

const [ one, , , two, , , , three ] = things;

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);

//Object literal shorthand:
// let type1 = 'quartz';
// let color1 = 'rose';
// let carat1 = 21.29;

// const gemstone1 = {
// 	type1: type,
// 	color1: color,
// 	carat1: carat
// };

// console.log(gemstone1);

let type1 = 'quartz';
let color1 = 'rose';
let carat1 = 21.29;

const gemstone1 = {
	type1,
	color1,
	carat1
};
console.log(gemstone1);

//Shorthand way to add methods to objects
// let type2 = 'quartz';
// let color2 = 'rose';
// let carat2 = 21.29;

// const gemstone2 = {
// 	type2,
// 	color2,
// 	carat2,
// 	calculateWorth: function() {
// 		// will calculate worth of gemstone based on type, color, and carat
// 	}
// };

// Shorthand method names:
let type2 = 'quartz';
let color2 = 'rose';
let carat2 = 21.29;

const gemstone2 = {
	type2,
	color2,
	carat2,
	calculateWorth() {}
};
console.log(gemstone2);

//Family of For Loops:
//The For Loop

const digits = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

for (let i = 0; i < digits.length; i++) {
	console.log(digits[i]);
}

//The For...in Loop (not recommened)

// const digits = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

// for (const index in digits) {
// 	console.log(digits[index]);
// }

//The For...of Loop (ES6. The most concise version of all the for loops)

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

for (number of numbers) {
	console.log(number);
}

// In For...of Loop you can stop or break a for...of loop at anytime

const figures = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

for (figure of figures) {
	if (figure % 2 === 0) {
		continue;
	}
	console.log(figure);
}

/*
 * Programming Quiz: Writing a For...of Loop
 */

const days = [ 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ];

for (const day of days) {
	var upperDay = day.charAt(0).toUpperCase() + day.slice(1);
	console.log(upperDay);
}

//Spread operator(ES6)

const books = [ 'Don Quixote', 'The Hobbit', 'Alice in Wonderland', 'Tale of Two Cities' ];
console.log(...books);

const primes = new Set([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]);
console.log(...primes);

//Combining arrays with concat(prior to the spread operator)

const fruits = [ 'apples', 'bananas', 'pears' ];
const vegetables = [ 'corn', 'potatoes', 'carrots' ];

const produce = fruits.concat(vegetables);

console.log(produce);

/*
 * Instructions: Use the spread operator to combine the `fru` and `veg` arrays into the `produce` array.(ES6)
 */

const fru = [ 'apples', 'bananas', 'pears' ];
const veg = [ 'corn', 'potatoes', 'carrots' ];

const mix = [ ...fru, ...veg ];

console.log(mix);

//Rest parameter

const order = [ 20.17, 18.67, 1.5, 'cheese', 'eggs', 'milk', 'bread' ];
const [ total, subtotal, tax, ...items ] = order;
console.log(total, subtotal, tax, items);

//Rest parameter vs spread operator
//Spread operator:
const myPackage = [ 'cheese', 'eggs', 'milk', 'bread' ];
console.log(...myPackage);

//Rest parameter
printPackageContent('cheese', 'eggs', 'milk', 'bread');
function printPackageContent(...items) {
	for (const item of items) {
		console.log(item);
	}
}

//Using the arguments object vs using the rest parameter
//The arguments object:
function sum() {
	let total = 0;
	for (const argument of arguments) {
		total += argument;
	}
	return total;
}
