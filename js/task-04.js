const valueRef = document.querySelector('#value');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');

let value = 0;

const onIncrementBtnClick = () => {
	value += 1;
	valueRef.textContent = value;
};

const onDecrementBtnClick = () => {
	value -= 1;
	valueRef.textContent = value;
};
decrementBtnRef.addEventListener('click', onDecrementBtnClick);
incrementBtnRef.addEventListener('click', onIncrementBtnClick);
