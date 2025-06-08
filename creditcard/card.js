function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	return number === '1234123412341234'
}

function displayError(msg) {
	// display error message
    let errorBox = document.querySelector('.errorMsg');
	if (!errorBox) {
		errorBox = document.createElement('div');
		errorBox.classList.add('errorMsg');
		errorBox.style.color = 'red';
		document.querySelector('form').appendChild(errorBox);
	}
	errorBox.innerText = msg;
}

// --------used some chat gpt here--------------------------------------------------------

    function submitHandler(event) {
	event.preventDefault();
	let errorMsg = '';

	const cardNumber = document.querySelector('#card-number').value.trim();
	const month = parseInt(document.querySelector('#month-expiration').value.trim());
	const year = parseInt(document.querySelector('#year-expiration').value.trim());
	
	displayError(''); // Clear previous errors

	// Validate card number
	if (isNaN(cardNumber)) {
		errorMsg += 'Card number is not a valid number\n';
	} else if (!isCardNumberValid(cardNumber)) {
		errorMsg += 'Card number is not a valid card number\n';
	}

	// Validate expiration date
	const fullYear = year < 100 ? 2000 + year : year; // assume 2-digit years
	if (isNaN(month) || isNaN(fullYear) || month < 1 || month > 12) {
		errorMsg += 'Expiration date is not valid\n';
	} else {
		const now = new Date();
		const enteredDate = new Date(fullYear, month - 1);
		enteredDate.setMonth(enteredDate.getMonth() + 1);
		enteredDate.setDate(0); // end of month

		if (enteredDate < now) {
			errorMsg += 'Expiration date must be in the future\n';
		}
	}

	if (errorMsg !== '') {
		displayError(errorMsg);
		return false;
	}

	alert('Payment submitted successfully!');
	return true;
}
//-----------------------------------------------------------------------------------------

document.querySelector('#credit-card').addEventListener('submit', submitHandler)