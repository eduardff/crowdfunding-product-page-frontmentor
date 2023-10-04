const removeStyle = () => {
  document.querySelectorAll('.product').forEach((element) => {
    element.style.borderColor = '';
  });
  document.querySelectorAll('.product__collapsible').forEach((element) => {
    element.style.display = 'none';
  });
};
const selectInputRadio = () => {
  const $main = document.getElementById('main');
  $main.addEventListener('click', (event) => {
    if (event.target.type === 'radio') {
      const pledgeBox = event.target.closest('.product');
      removeStyle();
      pledgeBox.style.borderColor = 'hsl(176, 50%, 47%)';
      pledgeBox.children[1].style.display = 'block';
    }
  });
};
export { selectInputRadio };

// nota  : el titulo de cada inputradio deberia ser un label para que al dar click al nombre se eleccione
