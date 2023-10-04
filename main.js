import { showMenu } from './js/menu';
import { closeModal, openModal } from './js/modal';
import { selectInputRadio } from './js/select-pledge';
import './sass/style.scss';
import 'animate.css';

showMenu(document.getElementById('hamburger-icon'));
openModal(
  document.getElementById('main'),
  document.querySelector('.modal-backdrop')
);
closeModal(
  document.querySelector('.btn-clear-modal'),
  document.querySelector('.modal-backdrop')
);
selectInputRadio();
