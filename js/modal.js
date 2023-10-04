const openModal = (main, modal) => {
  main.addEventListener('click', (event) => {
    event.target.classList.contains('btn') &&
      (modal.style.visibility = 'visible');
  });
};
const closeModal = (btn, modal) => {
  btn.addEventListener('click', (event) => {
    event.target && (modal.style.visibility = 'hidden');
  });
};
export { openModal, closeModal };
