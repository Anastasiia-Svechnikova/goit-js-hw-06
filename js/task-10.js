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
	let markup = ``;

	for (let i = 0; i < amount; i += 1) {
		markup += `<div style="background-color: ${getRandomHexColor()};margin: 5px"></div>`;
	}

	boxesRef.insertAdjacentHTML('afterbegin', markup);

	const arr = [...boxesRef.children];
	arr.forEach((div, index) => {
		div.style.width = `${30 + 10 * (index + 1)}px`;
		div.style.height = `${30 + 10 * (index + 1)}px`;
	});
}
