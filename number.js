function formatNumber(number) {
	if (number < 1000) return number.toString();
	if (number < 1000000) {
		var thousands = (Math.floor(number/1000)).toString();
		var hundreds = (Math.floor(number/100) % 10).toString();
		return thousands + '.' + hundreds + 'K';
	}
}

function randomTwitterNumber(min,max) {
	var number = Math.floor(Math.random() * (max - min)) + min;
	return formatNumber(number);
}