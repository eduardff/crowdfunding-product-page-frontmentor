import { removeStyle } from './select-pledge';
const styles = (InputRadioId) => {
  document.getElementById(InputRadioId).checked = true;
  const $estado = document.getElementById(InputRadioId);
  $estado.closest('.product').style.borderColor = 'hsl(176, 50%, 47%)';
  $estado.closest('.product').children[1].style.display = 'block';
};
const openModal = (main, modal) => {
  main.addEventListener('click', (event) => {
    switch (event.target.dataset.btn) {
      case 'project':
        modal.style.visibility = 'visible';
        for (const input of document.querySelectorAll("input[type='radio']")) {
          input.checked = false;
        }
        removeStyle();
        break;
      case 'bamboo':
        modal.style.visibility = 'visible';
        removeStyle();
        styles('bamboo');
        break;
      case 'black':
        modal.style.visibility = 'visible';
        removeStyle();
        styles('black');
        break;
    }
  });
};
const closeModal = (btn, modal) => {
  btn.addEventListener('click', (event) => {
    event.target && (modal.style.visibility = 'hidden');
  });
};
export { openModal, closeModal };
