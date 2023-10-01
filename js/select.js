const $main = document.querySelector('main');
const $templateProductModal = document.getElementById('product-modal').content;

const getModal = () => {
  $main.addEventListener('click', (event) => {
    const templateClone = $templateProductModal.cloneNode(true);
    const target = event.target;
    if (target.classList.contains('btn')) {
      const body = document.querySelector('body');
      body.prepend(templateClone);
    }
  });
};
export { getModal };
