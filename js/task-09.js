const changeColorBtnRef = document.querySelector('.change-color');
const colorSpanRef = changeColorBtnRef.previousElementSibling.firstElementChild;

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColorBtnRef.addEventListener('click', onChangeColorBtnRefClick);
function onChangeColorBtnRefClick() {
	document.body.style.backgroundColor = getRandomHexColor();
	colorSpanRef.textContent = getRandomHexColor();
}
