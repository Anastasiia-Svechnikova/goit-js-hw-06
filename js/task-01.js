// const showListInfo = itemsSelector => {
// 	const itemsRef = document.querySelectorAll(itemsSelector);
// 	console.log(`Number of categories: ${itemsRef.length}`);
// 	itemsRef.forEach(item =>
// 		console.log(
// 			`\nCategory: ${item.firstElementChild.textContent}\n Number of elements: ${item.lastElementChild.children.length}`,
// 		),
// 	);
// };
// showListInfo('.item');

const item = document.querySelectorAll('.item');
console.log(item);
// item.childNodes.forEach(item => console.log(item));
const ul = document.querySelector('#categories');
console.log(ul.children);
// ul.namedItem('li');
// console.log(ul.item(3));
