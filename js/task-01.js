const showListInfo = itemsSelector => {
	const itemsRef = document.querySelectorAll(itemsSelector);
	const itemTitelsRef = Array.from(itemsRef).map(item => item.querySelector('h2'));
	const itemLiListsRef = Array.from(itemsRef).map(item => item.querySelectorAll('li'));

	console.log(`Number of categories: ${itemsRef.length}`);
	for (let i = 0; i < itemLiListsRef.length; i += 1) {
		console.log(`\nCategory: ${itemTitelsRef[i].textContent}\nElements: ${itemLiListsRef[i].length}`);
	}
};
showListInfo('.item');
