
var names = ['Maple','Darline','Mirian','Elizabeth','Stephani','Karlene','Jessenia','Delphine','Augustina','Romona','Gussie','Maud','Corrin','Ciera','Carlton','Alejandrina','Florencio','Emilia','Loria','Caridad','Graham','Corrina','Erlinda','Jamaal','Vincenzo','Ernest','German','Jacquelyne','Violette','Kieth','Daphne','Chanel','Sachiko','Kanisha','Pearline','Francesco','Dexter','Bobbye','Kaye','Dottie','Carlene','Margurite','Laquanda','Kerri','Ashleigh','Rosalie','Kristin','Loan','Margaret','Nicol'];
var descripts = ['Visionary','Clever','Cars','Computers','Coffee','Cappucinos','Tech','Games','Videogames','Culture','Savant','Guru','Idiot','Telepath','Constipated','Hunter','Force of Nature','Teen','Cyclist','Vegan','Naturist','Mediator','Journalist','Developer','Polymath','Passionate','Creative','Strategist','Leader','Enabler','Deviant','Producer','Futurist','Nerd','Geek','Designer'];
var spacers = ['. ',', ',' . ',' | ',' + ',' & ',' : ',', ',', ','. '];
var quotes = ['i would have extended that scene at the beginning of one of those game of thrones episodes where the knight is trying to light the longboat with a flaming arrow but keeps missing','am I the only one that attributed meaning to the fact that invuln didn\'t change the sky color in vanilla doom engine games? :P','rand paul literally said he wasn\'t brown enough to get held up at tsa','am i the only person who finds it incredibly irritating when news websites make the left and right arrow keys take you to other articles? i don\'t always use the scrollwheel, and it\'s easy to accidentally press the wrong key and lose the page when navigating via arrow up/down'];

function descList() { 
	var sep = ra(spacers); 
	var output = ""; 
	var iter = Math.random() * 4 + 1; 
	var descs = [];
	while (descs.length < iter) {
		var d = ra(descripts);
		if (descs.indexOf(d)<0) descs.push(d); 
	}
	for (var i = 0; i < descs.length-1; i++) {
		output += prefix() + descs[i] + sep;
	}
	output += descs[descs.length-1];
	return output;
}

function prefix() {
	var prefs = ["Experimental","Self-taught","Anti","Discrete","Magical","Quasi","Post","Quantum","Expert","Pop","Covert","Open Source",'Contemporary','Fanatic','Devoted','Proud','Loving','Devoted'];
	if (Math.random() < 0.2) return ra(prefs) + " ";
	else return "";
}

function suffix() {
	var suffs = ["2.0","Extrodinaire","Master","Idiot","Junkie"];
	if (Math.random() < 0.2) return " " + ra(suffs);
	else return "";
}

function description() { 
	if (Math.random()<0.92) return descList(); 
	else return ra(quotes);
}

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