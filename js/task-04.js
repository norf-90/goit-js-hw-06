let counterValue = 0;

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const counterEl = document.querySelector('#value');

incrementBtn.addEventListener('click', onIncrementBtnClick);
decrementBtn.addEventListener('click', onDecrementBtnClick);

function onIncrementBtnClick() {
  counterValue += 1;
  counterEl.textContent = counterValue;
}

function onDecrementBtnClick() {
  counterValue -= 1;
  counterEl.textContent = counterValue;
}
