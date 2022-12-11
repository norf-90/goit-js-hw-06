const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputElInput);

function onInputElInput(event) {
  const { value } = event.currentTarget;
  outputEl.textContent = value ? value : 'Anonimus';
}
