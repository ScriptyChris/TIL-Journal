document.querySelector('form').addEventListener('submit', (ev) => {
  ev.preventDefault();

  const formControlValues = [...new FormData(ev.target)];
  console.log('Form controls values', formControlValues);
})
