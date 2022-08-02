const boxesRef = document.querySelector('#boxes');
const controlsRef = boxesRef.previousElementSibling;
const amountRef = controlsRef.firstElementChild;
const createBtnRef = amountRef.nextElementSibling;
const destroyBtnRef = controlsRef.lastElementChild;

console.log(amountRef);

createBtnRef.addEventListener('click', onCreateBtnRef);
destroyBtnRef.addEventListener('click', onDestroyBtnRef);

function onDestroyBtnRef() {
	boxesRef.innerHTML = '';
	amountRef.value = '';
}

function onCreateBtnRef() {
	createBoxes(Number(amountRef.value));
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
	let width = 30;
	let height = 30;
	let markup = ``;

	for (let i = 0; i < amount; i += 1) {
		markup += `<div style="background-color: ${getRandomHexColor()}; width:${width}px; height: ${height}px; margin: 5px"></div>`;
		height += 10;
		width += 10;
	}

	boxesRef.insertAdjacentHTML('afterbegin', markup);
}
