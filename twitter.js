
var names = ['Maple','Darline','Mirian','Elizabeth','Stephani','Karlene','Jessenia','Delphine','Augustina','Romona','Gussie','Maud','Corrin','Ciera','Carlton','Alejandrina','Florencio','Emilia','Loria','Caridad','Graham','Corrina','Erlinda','Jamaal','Vincenzo','Ernest','German','Jacquelyne','Violette','Kieth','Daphne','Chanel','Sachiko','Kanisha','Pearline','Francesco','Dexter','Bobbye','Kaye','Dottie','Carlene','Margurite','Laquanda','Kerri','Ashleigh','Rosalie','Kristin','Loan','Margaret','Nicol'];

function ra(array) { 
	return array[Math.floor(Math.random()*array.length)];
}

function randomNumber() { 
	return ra(['0','1','2','3','4','5','6','7','8','9']);
}

function addNumbers(string) { 
	var iter = Math.random() * 6; 
	for (var i = 0; i < iter; i++) {
		string += randomNumber();
	}
	return string;
}

function concatString(string) { 
	var sh = Math.floor(Math.random() * (string.length * 0.4)); 
	return string.substring(0,string.length - sh - 1);
}

function randomColor() { 
	return Math.floor(Math.random() * 16777216).toString(16);
}

var fullname = ra(names);
var username = fullname.toLowerCase();
if (Math.random() < 0.3) username = concatString(username);
if (Math.random() < 0.3 && username.length <= 4) username = username+username;
if (Math.random() < 0.5) username = addNumbers(username);

document.getElementById('avatar').style = "background-color:#"+randomColor();
document.getElementById('fullname').innerHTML = fullname;
document.getElementById('username').innerHTML = username;
document.getElementById('follower_number').innerHTML = Math.floor(Math.random() * 1000);
document.getElementById('tweet_number').innerHTML = Math.floor(Math.random() * 1000);
document.getElementById('following_number').innerHTML = Math.floor(Math.random() * 1000);
document.getElementById('desc_ription').innerHTML = description();