function isInteger(value) {
	if (undefined === value || null === value) {
		return false;
	}
	return value % 1 === 0;
}
isInteger(8);