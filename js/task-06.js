function checkInputLength(inputselector) {
	const inputRef = document.querySelector(inputselector);
	const requiredLength = Number(inputRef.dataset.length);

	inputRef.addEventListener('input', onInputRef);

	function onInputRef(event) {
		const inputLength = event.currentTarget.value.length;

		inputRef.addEventListener('blur', () => {
			if (!(inputLength === requiredLength)) {
				inputRef.classList.add('invalid');
			} else {
				inputRef.classList.replace('invalid', 'valid');
			}
		});
	}
}
checkInputLength('#validation-input');
