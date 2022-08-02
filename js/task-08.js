const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
	event.preventDefault();

	const { email, password } = event.currentTarget.elements;

	if (email.value === '' || password.value === '') {
		alert('Все поля должны быть заполнены');
	} else {
		const elements = {
			email: email.value,
			password: password.value,
		};

		console.log(elements);
		event.currentTarget.reset();
	}
}
