const valueRef = document.querySelector('#value');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const onIncrementBtnClick = () => {
	counterValue += 1;
	valueRef.textContent = counterValue;
};

const onDecrementBtnClick = () => {
	counterValue -= 1;
	valueRef.textContent = counterValue;
};
decrementBtnRef.addEventListener('click', onDecrementBtnClick);
incrementBtnRef.addEventListener('click', onIncrementBtnClick);
