import { sendForm } from './form';

// funciones de utilidad
const removeStyle = () => {
  document.querySelectorAll('.product').forEach((element) => {
    element.style.borderColor = '';
  });
  document.querySelectorAll('.product__collapsible').forEach((element) => {
    element.style.display = 'none';
  });
};

const $main = document.getElementById('main');
const selectInputRadio = () => {
  $main.addEventListener('click', (event) => {
    const radioInput = event.target.checked;
    if (radioInput) {
      const pledgeBox = event.target.closest('.product');
      const form = pledgeBox.querySelector('form');
      removeStyle();
      pledgeBox.style.borderColor = 'hsl(176, 50%, 47%)';
      pledgeBox.children[1].style.display = 'block';
      sendForm(form);
    }
  });
};

export { selectInputRadio, removeStyle };
