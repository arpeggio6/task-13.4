var os = require('os');

function runtime() {
	var uptime = os.uptime();
	var hours = Math.floor((uptime / 3600));
	var minutes = Math.floor(((uptime - (hours * 3600)) / 60));
	var seconds = uptime - (hours * 3600) - (minutes * 60);

	if (hours){
		console.log('Uptime: =', hours, 'h', minutes, 'min', seconds, 'sec');
	} else if (minutes) {
		console.log('Uptime: =', minutes, 'min', seconds, 'sec');
	} else {
		console.log('Uptime: =', seconds, 'sec');
	}
}

exports.print = runtime;