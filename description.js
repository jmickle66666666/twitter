var descripts = ['Sassy','Visionary','Clever','Cars','Computers','Coffee','Cappucinos','Tech','Games','Videogames','Culture','Savant','Guru','Idiot','Telepath','Constipated','Hunter','Force of Nature','Teen','Cyclist','Vegan','Naturist','Mediator','Journalist','Developer','Polymath','Passionate','Creative','Strategist','Leader','Enabler','Deviant','Producer','Futurist','Nerd','Geek','Designer'];
var spacers = ['. ',', ',' . ',' | ',' + ',' & ',' : ',', ',', ','. '];
var quotes = ['i would have extended that scene at the beginning of one of those game of thrones episodes where the knight is trying to light the longboat with a flaming arrow but keeps missing',
			  "am I the only one that attributed meaning to the fact that invuln didn't change the sky color in vanilla doom engine games? :P",
			  "rand paul literally said he wasn't brown enough to get held up at tsa',
			  "am i the only person who finds it incredibly irritating when news websites make the left and right arrow keys take you to other articles? i don't always use the scrollwheel, and it's easy to accidentally press the wrong key and lose the page when navigating via arrow up/down",
			  'imperative form forces the message to be verb-initial which encourages you to actually descibe what was done imho',
			  'i dontr think theres been a day in the last month where someone either aksed me what im applying for or told me what theyre applying for',
			  'every time I go away for any amount of time I miss something amazing',
			  'I am pretty sure every modern web browser is a black hole where your system memory ends up',];
var prefs = ['Tech',"Experimental",'Self-taught',"Anti",'Discrete',"Magical",'Quasi',"Post",'Quantum',"Expert",'Pop',"Covert",'Open Source',"Contemporary",'Fanatic',"Devoted",'Proud',"Loving",'Devoted',"Devoted"];
var suffs = ["2.0","Extrodinaire","Master","Idiot","Junkie"];


function descList() { 
	var sep = randomArrayElement(spacers); 
	var output = ""; 
	var iter = Math.random() * 4 + 1; 
	var descs = [];
	while (descs.length < iter) {
		var d = randomArrayElement(descripts);
		if (descs.indexOf(d)<0) descs.push(d); 
	}
	for (var i = 0; i < descs.length-1; i++) {
		output += prefix() + descs[i] + sep;
	}
	output += descs[descs.length-1];
	return output;
}

function prefix() {
	if (Math.random() < 0.2) return randomArrayElement(prefs) + " ";
	else return "";
}

function suffix() {
	if (Math.random() < 0.2) return " " + randomArrayElement(suffs);
	else return "";
}

function description() { 
	if (Math.random()<0.92) return descList(); 
	else return randomArrayElement(quotes);
}
