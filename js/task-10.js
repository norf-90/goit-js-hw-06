const inputEl = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick() {
  let dimentions = 30;
  let markup = '';
  const elements = inputEl.value;
  for (let i = elements; i > 0; i -= 1) {
    markup += `<div style="width: ${dimentions}px; height: ${dimentions}px; background-color: ${getRandomHexColor()};"></div>`;
    dimentions += 10;
  }
  boxesEl.insertAdjacentHTML('afterbegin', markup);
}

function onDestroyBtnClick() {
  boxesEl.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
