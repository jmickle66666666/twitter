
// function for selecting a random element from an array
function randomArrayElement(array) { 
	
	// generate a random number and multiply by the length of the given array
	var randomFloatLengthOfArray = Math.random()*array.length;

	// remove any decimal remainder of the random number, using the javascript
	// 'Math.floor()' method, thereby converting the value into an integer.

	// See: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
	var randomIntegerLengthOfArray = Math.floor(randomFloatLengthOfArray);

	// now use the newly generated random integer to select an element from the array
	var randomArrayElement = array[randomIntegerLengthOfArray];

	// return the selected element
	return randomArrayElement;
}

// function to generate a random hex value to be used as a color
function randomColor() { 
	// generate a random number to use
	var randomFloat = Math.random();

	// constant for the maximum possible hex color value
	// TODO: explain how this number came to be
	var maxHexColorValue = 16777216;

	// multiply the random value by the maximum hex value
	// once again, we are using the javascript method 'Math.floor()' to
	// convert it into an integer.

	// See: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
	var randomHexValue = Math.floor(randomFloat * maxHexColorValue);

	// use the built-in vanilla javascript method 'Number.toString()' to convert the
	// value to a string representing a hexadecimal value
	// the 'hexadeca' part of the word 'hexadecimal' stands for '16', as
	// hex means '6' and dec means '10'
	var randomHexString = randomHexValue.toString(16);

	// return the generated hex string
	return randomHexString;
}

// run all the code only once the window has finished loading. this prevent any race condition issues.
window.onload = function () {

	// see name.js, generate and store a name for our twitter user
	var generatedFullName = getName();

	// see name.js, generate and store a username for our twitter user,
	// using the generated full name as a basis for generation.
	var generatedUserName = getUsername(generatedFullName);

	// set the avatar background color to a color generated with randomColor();
	document.getElementById('avatar').style = "background-color:#"+randomColor();

	// set the name section of the html to show the newly generated name for our twitter user
	document.getElementById('fullname').innerHTML = generatedFullName;

	// set the username section of the html to show the newly generated username for our twitter user
	document.getElementById('username').innerHTML = generatedUserName;

	// set the follower number to a randomly generated number, formatted as twitter would. see number.js
	document.getElementById('follower_number').innerHTML = randomTwitterNumber(0,800);

	// set the tweet number to a randomly generated number, formatted as twitter would. see number.js
	document.getElementById('tweet_number').innerHTML = randomTwitterNumber(0,10000);

	// set the following number to a randomly generated number, formatted as twitter would. see number.js
	document.getElementById('following_number').innerHTML = randomTwitterNumber(0,2000);

	// set the description to a generated description using the 'description()' function defined
	// in description.js
	document.getElementById('desc_ription').innerHTML = description();
};
