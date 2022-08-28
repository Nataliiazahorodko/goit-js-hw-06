const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget.elements;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email);
  console.log(password);

  if (email === '' || password === '') {
    return alert('Всі поля повинні бути заповнені');
  } else {
    console.log({ email, password });
    form.reset();
  }
}
