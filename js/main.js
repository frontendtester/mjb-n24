const elModal = document.querySelector('.modal');
const elModalClose = document.querySelector('.js-modal-close');

if (elModalClose) {
  elModalClose.addEventListener('click', function () {
    elModal.classList.remove('modal-open');
  });
}
