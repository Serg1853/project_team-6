(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-explore]'),
      closeModalBtn: document.querySelector('[data-modal-close-explore]'),
      modal: document.querySelector('[data-modal-explore]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden-explore');
    }
  })();