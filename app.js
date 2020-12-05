// import functions and grab DOM elements
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const result = document.getElementById('result');
const operators = document.getElementsByClassName('operator');

// initialize state

// set event listeners to update state and DOM

for (let operator of operators) {
	operator.addEventListener('click', () => {
		const number1 = Number(input1.value);
		const number2 = Number(input2.value);
		switch (operator.id) {
			case 'add':
				const sum = number1 + number2;
				result.textContent = sum;
				break;
			case 'subtract':
				const difference = number1 - number2;
				result.textContent = difference;
				break;
			case 'multiply':
				const product = number1 * number2;
				result.textContent = product;
				break;
			case 'divide':
				const quotient = number1 / number2;
				result.textContent = quotient;
				break;
			default:
				break;
		};
	});
};

/*
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
*/

/*
addButton.addEventListener('click', () => {
	const number1 = Number(input1.value);
	const number2 = Number(input2.value);
	const addResult = number1 + number2;
	result.textContent = addResult;
});

subtractButton.addEventListener('click', () => {
	const number1 = Number(input1.value);
	const number2 = Number(input2.value);
	const subtractResult = number1 - number2;
	result.textContent = subtractResult;
});

multiplyButton.addEventListener('click', () => {
	const number1 = Number(input1.value);
	const number2 = Number(input2.value);
	const multiplyResult = number1 * number2;
	result.textContent = multiplyResult;
});

divideButton.addEventListener('click', () => {
	const number1 = Number(input1.value);
	const number2 = Number(input2.value);
	const divideResult = number1 / number2;
	result.textContent = divideResult;
});
*/