const inputRef = document.querySelector('#name-input');
const outputRef = inputRef.nextElementSibling.firstElementChild;

inputRef.addEventListener('input', event => {
	outputRef.textContent = event.currentTarget.value;
});
