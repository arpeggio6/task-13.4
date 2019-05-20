var os = require('os');
var colors = require('colors');

function runtime() {
	var uptime = os.uptime();
	var hours = Math.floor((uptime / 3600));
	var minutes = Math.floor(((uptime - (hours * 3600)) / 60));
	var seconds = uptime - (hours * 3600) - (minutes * 60);

	if (hours){
		console.log(colors.green('Uptime:'), hours, 'h', minutes, 'min', seconds, 'sec');
	} else if (minutes) {
		console.log(colors.green('Uptime:'), minutes, 'min', seconds, 'sec');
	} else {
		console.log(colors.green('Uptime:'), seconds, 'sec');
	}
}

exports.print = runtime;