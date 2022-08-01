const showListInfo = itemsSelector => {
	const itemsRef = document.querySelectorAll(itemsSelector);
	console.log(`Number of categories: ${itemsRef.length}`);
	itemsRef.forEach(item =>
		console.log(
			`\nCategory: ${item.firstElementChild.textContent}\n Number of elements: ${item.lastElementChild.children.length}`,
		),
	);
};
showListInfo('.item');
