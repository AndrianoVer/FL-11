function getMin() {
	let min = arguments[0];
	for (let i = 0, j = arguments.length; i < j; i++) {
		if (arguments[i] < min) {
			min = arguments[i];
		}
	}
	return min;
}

getMin(3, 0, -3);