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
 * Extract data from arrays and objects into distinct variables using destructuring.
 */

const point = [ 10, 25, -34 ];

const x = point[0];
const y = point[1];
const z = point[2];

console.log(x, y, z);
