function controlFontSize(selector) {
	const rangeRef = document.querySelector(selector);
	const textRef = rangeRef.nextElementSibling.nextElementSibling;

	rangeRef.addEventListener('input', event => {
		textRef.style.fontSize = `${event.currentTarget.value}px`;
	});
}
controlFontSize('#font-size-control');
