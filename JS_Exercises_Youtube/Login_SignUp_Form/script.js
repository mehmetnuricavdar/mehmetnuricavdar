const setFormMessage = (formElement, type, message) => {
  const messageElement = formElement.querySelector(".form__message");
  messageElement.textContent = message;
  messageElement.classList.remove(
    "form__message--success",
    "form__message--error"
  );
  messageElement.classList.add(`form__message--${type}`);
};

//setFormMessage(loginForm, "success", "You are logged in!")

const setInputError = (inputElement, message) => {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = message;
};

const clearInputError = (inputElement) => {
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = "";
};

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (event) => {
      event.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
    });

  document.querySelector("#linkLogin").addEventListener("click", (event) => {
    event.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
  });

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    setFormMessage(loginForm, "error", "Invalid username or password");
  });

  document.querySelectorAll(".form__input").forEach((inputElement) => {
    inputElement.addEventListener("blur", (event) => {
      if (
        event.target.id === "signupUsername" &&
        event.target.value.length > 0 &&
        event.target.value.length < 10
      ) {
        setInputError(
          inputElement,
          "Username must be at least 10 characters in length"
        );
      }
      inputElement.addEventListener("input", (event) => {
        clearInputError(inputElement);
      });
    });
  });
});
