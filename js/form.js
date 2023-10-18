const isNumber = (value) => {
  const pattern = /^[0-9]+$/;
  return pattern.test(value);
};

const sendForm = (form) => {
  const inputNumber = form.querySelector('input');
  const checkNumber = () => {
    const valueInput = inputNumber.value;
    if (!isNumber(valueInput)) {
      inputNumber.style.outlineColor = '#db1a1a';
    } else {
      inputNumber.style.outlineColor = '#e0e0e0';
      return true;
    }
    return false;
  };
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isNumberValid = checkNumber();
    if (isNumberValid) {
      document.querySelector('.modal-completed ').style.visibility = 'visible';
      document.querySelector('.modal-backdrop').style.visibility = 'hidden';
      form.reset();
      inputNumber.style.outlineColor = '#e0e0e0';
    }
  });
};

document
  .querySelector('.modal-completed')
  .addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
      // document.querySelector('.modal-completed').style.visibility = 'hidden';
      event.target.closest('.modal-completed').style.visibility = 'hidden';
      document.querySelector('.progress__bar').style.width = '100%';
    }
  });
console.log('hola');

export { sendForm };
