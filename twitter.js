
function ra(array) { 
	return array[Math.floor(Math.random()*array.length)];
}

function randomColor() { 
	return Math.floor(Math.random() * 16777216).toString(16);
}

document.onLoad = function () {

var fullname = getName();
var username = getUsername(fullname);

document.getElementById('avatar').style = "background-color:#"+randomColor();
document.getElementById('fullname').innerHTML = fullname;
document.getElementById('username').innerHTML = username;
document.getElementById('follower_number').innerHTML = Math.floor(Math.random() * 1000);
document.getElementById('tweet_number').innerHTML = Math.floor(Math.random() * 1000);
document.getElementById('following_number').innerHTML = Math.floor(Math.random() * 1000);
document.getElementById('desc_ription').innerHTML = description();

};