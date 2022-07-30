const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

function makeItem(itemName) {
	const itemRef = document.createElement('li');
	itemRef.textContent = itemName;
	itemRef.classList.add('item');
	return itemRef;
}

function makeList(listSelector, elements) {
	const listItemsRef = elements.map(makeItem);
	const listRef = document.querySelector(listSelector);
	listRef.append(...listItemsRef);
}
makeList('#ingredients', ingredients);
