const rangeEl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

// for initital value, before event
text.style.fontSize = `${rangeEl.value}px`;

// after event
rangeEl.addEventListener('input', onRangeInput);

function onRangeInput(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}
