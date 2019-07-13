function formatTime(minutes) {
	let days = Math.floor(minutes / 1440);
	let hours = Math.floor((minutes - days * 1440) / 60);
	let min = minutes - (days * 1440) - (hours * 60);
	return `${days} day(s) ${hours} hour(s) ${min} minute(s)`;
}

formatTime(120);
formatTime(59);
formatTime(3601);