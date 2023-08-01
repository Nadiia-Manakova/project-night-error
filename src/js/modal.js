(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    inputEmail: document.querySelector("#user-email"),
    formEl: document.querySelector("#rent-form")
  };

  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.formEl.addEventListener("submit", submitForm)

function submitForm(event) {
  event.preventDefault();
  console.log("test")
      refs.modal.classList.toggle("is-hidden");
      event.currentTarget.reset()
  }

  function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      }


})();
