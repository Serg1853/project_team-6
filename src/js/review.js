(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-review-modal-open]'),
      closeModalBtn: document.querySelector('[data-review-modal-close]'),
      modal: document.querySelector('[data-review-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();