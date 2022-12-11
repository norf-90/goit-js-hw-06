const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (!!email.value && !!password.value) {
    const formValues = {
      [email.name]: email.value,
      [password.name]: password.value,
    };
    console.log(formValues);
    formEl.reset();
  } else {
    alert('🚫 Заповніть всі поля !!! 🚫');
  }
}
