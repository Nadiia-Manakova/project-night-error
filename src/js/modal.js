// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//     inputEmail: document.querySelector("#user-email"),
//     formEl: document.querySelector("#rent-form")
//   };

//   refs.closeModalBtn.addEventListener("click", toggleModal);
//   refs.formEl.addEventListener("submit", submitForm)

// function submitForm(event) {
//   event.preventDefault();
//   console.log("test")
//       refs.modal.classList.toggle("is-hidden");
//       event.currentTarget.reset()
//   }

//   function toggleModal() {
//       refs.modal.classList.toggle("is-hidden");
//       }


// })();

/**
  |============================
  | 
  |============================
*/

// JavaScript code with modifications
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    inputEmail: document.querySelector("#user-email"),
    inputUserName: document.querySelector("#user-name"), // Add the reference to the user name input field
    formEl: document.querySelector("#rent-form"),
    userNameModal: document.getElementById("user-name-modal"), // Reference to the span element to display the username in the modal
  };

  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.formEl.addEventListener("submit", submitForm);

  function submitForm(event) {
    event.preventDefault();
    // Get the value of the user name input field
    const userName = refs.inputUserName.value.toUpperCase();
    refs.userNameModal.textContent = `Hi ${userName}!`; // Update the modal text with the username
    refs.modal.classList.toggle("is-hidden");
    event.currentTarget.reset();
  }

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

const textarea = document.getElementById("user-comment");

textarea.addEventListener("input", function () {
    if (textarea.value.trim() !== "") {
        textarea.classList.add("has-content");
    } else {
        textarea.classList.remove("has-content");
    }
});

})();


