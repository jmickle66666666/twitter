function ra(array) { 
	return array[Math.floor(Math.random()*array.length)];
}

function randomColor() { 
	return Math.floor(Math.random() * 16777216).toString(16);
}

window.onload = function () {
	var fn = getName();
	var un = getUsername(fn);

	document.getElementById('avatar').style = "background-color:#"+randomColor();
	document.getElementById('fullname').innerHTML = fn;
	document.getElementById('username').innerHTML = un;
	document.getElementById('follower_number').innerHTML = randomTwitterNumber(0,800);
	document.getElementById('tweet_number').innerHTML = randomTwitterNumber(0,10000);
	document.getElementById('following_number').innerHTML = randomTwitterNumber(0,2000);
	document.getElementById('desc_ription').innerHTML = description();
};
