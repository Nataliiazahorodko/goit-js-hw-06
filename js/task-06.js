const refs = {
  validationInput: document.querySelector('#validation-input'),
};

refs.validationInput.addEventListener("blur", (event) => {
  const { value } = event.currentTarget;

  value.length == refs.validationInput.dataset.length
    ? (refs.validationInput.classList = "valid")
    : (refs.validationInput.classList = "invalid");
});
