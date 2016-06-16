
function ra(array) { 
	return array[Math.floor(Math.random()*array.length)];
}

function randomColor() { 
	return Math.floor(Math.random() * 16777216).toString(16);
}

document.onLoad = function () {

var fn = getName();
var un = getUsername(fullname);

document.getElementById('avatar').style = "background-color:#"+randomColor();
document.getElementById('fullname').innerHTML = fn;
document.getElementById('username').innerHTML = un;
document.getElementById('follower_number').innerHTML = Math.floor(Math.random() * 1000);
document.getElementById('tweet_number').innerHTML = Math.floor(Math.random() * 1000);
document.getElementById('following_number').innerHTML = Math.floor(Math.random() * 1000);
document.getElementById('desc_ription').innerHTML = description();

};