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
