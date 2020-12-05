export function add(value1, value2) {
	return value1 + value2;
};

export function subtract(value1, value2) {
	return value1 - value2;
};

export function multiply(value1, value2) {
	return value1 * value2;
};

export function divide(value1, value2) {
	return value1 / value2;
};

export function doMath(value1, value2, operation) {
	return operation(value1, value2);
};