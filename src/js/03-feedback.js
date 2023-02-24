import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

const refs = {
  message: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
  form: document.querySelector('.feedback-form'),
};

populateTextarea();

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

function onInput(e) {
  const email = e.target.name;
  const message = e.target.value;
  formData[email] = message;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
  let savedData = localStorage.getItem(STORAGE_KEY);

  if (!savedData) {
    return;
  }
  formData = JSON.parse(savedData);

  refs.email.value = formData.email;
  refs.message.value = formData.message;
}
