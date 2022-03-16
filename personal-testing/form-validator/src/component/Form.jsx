import { useState } from "react";

function Form() {
  const errorState = ["default", "red", "orange", "green"];

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [validation, setValidation] = useState({
    username: false,
    email: false,
    password: false,
    passwordConfirm: false,
  });

  const [error, setError] = useState({
    username: " ",
    email: " ",
    password: " ",
    passwordConfirm: " ",
  });

  function validateUsername(event) {
    const usernameMsg = document.querySelector("[data-username-msg]");
    const newUsername = event.target.value;
    setInputs({
      username: newUsername,
      email: inputs.email,
      password: inputs.password,
      passwordConfirm: inputs.passwordConfirm,
    });

    if (newUsername === "") {
      validation.username = false;
      error.username = "";
    } else if (!newUsername.match(/^([a-zA-Z0-9-_]){1,30}$/)) {
      validation.username = false;
      error.username =
        "Can only contain letters and numbers. Must be under 30 characters.";
      changeClass(usernameMsg, errorState[1]);
    } else {
      validation.username = true;
      error.username = "Valid username";
      changeClass(usernameMsg, errorState[3]);
    }
  }

  function validateEmail(event) {
    const newEmail = event.target.value;
    setInputs({
      username: inputs.username,
      email: newEmail,
      password: inputs.password,
      passwordConfirm: inputs.passwordConfirm,
    });

    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (newEmail === "" || !newEmail.match(regex)) {
      validation.email = false;
      error.email = "";
    } else {
      validation.email = true;
      error.email = "Valid email";
    }
  }

  function validatePassword(event) {
    const passwordMsg = document.querySelector("[data-password-msg]");
    const newPassword = event.target.value;
    setInputs({
      username: inputs.username,
      email: inputs.email,
      password: newPassword,
      passwordConfirm: inputs.passwordConfirm,
    });

    const strongRegex = new RegExp(
      "^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$",
      "g"
    );
    const mediumRegex = new RegExp(
      "^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$",
      "g"
    );
    const enoughRegex = new RegExp("(?=.{8,}).*", "g");

    if (newPassword === "") {
      validation.password = false;
      error.password = "";
    } else if (newPassword.match(strongRegex)) {
      validation.password = true;
      error.password = "Very strong";
      changeClass(passwordMsg, errorState[3]);
    } else if (newPassword.match(mediumRegex)) {
      validation.password = true;
      error.password = "Medium";
      changeClass(passwordMsg, errorState[2]);
    } else if (newPassword.match(enoughRegex)) {
      validation.password = true;
      error.password = "Weak";
      changeClass(passwordMsg, errorState[1]);
    } else {
      validation.password = false;
      error.password = "More character";
      changeClass(passwordMsg, errorState[0]);
    }
  }

  function validatePasswordConfirm(event) {
    const passwordConfirmMsg = document.querySelector(
      "[data-password-confirm-msg]"
    );
    const newPasswordConfirm = event.target.value;
    setInputs({
      username: inputs.username,
      email: inputs.email,
      password: inputs.password,
      passwordConfirm: newPasswordConfirm,
    });

    if (newPasswordConfirm === "") {
      validation.passwordConfirm = false;
      error.passwordConfirm = "";
    } else if (newPasswordConfirm !== inputs.password) {
      validation.passwordConfirm = false;
      error.passwordConfirm = "Passwords must match";
      changeClass(passwordConfirmMsg, errorState[1]);
    } else {
      validation.passwordConfirm = true;
      error.passwordConfirm = "Matching passwords";
      changeClass(passwordConfirmMsg, errorState[3]);
    }
  }

  function changeClass(element, className) {
    removeClasses(element);
    element.classList.add(className);
  }

  function removeClasses(element) {
    for (const index in errorState) {
      element.classList.remove(errorState[index]);
    }
  }

  function createUser(event) {
    event.preventDefault();
    if (
      validation.username &&
      validation.email &&
      validation.password &&
      validation.passwordConfirm
    ) {
      const user = {
        username: inputs.username,
        email: inputs.email,
        password: inputs.password + " Needs hashing",
      };
      console.log(user);
    }
  }

  return (
    <form action="" method="POST">
      <h1>Sign up</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={inputs.username}
          onChange={(event) => validateUsername(event)}
        ></input>
        <p className="errorMsg" data-username-msg>
          {error.username}
        </p>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={inputs.email}
          onChange={(event) => validateEmail(event)}
        />
        <p className="errorMsg valid">{error.email}</p>
      </div>
      <div>
        <label htmlFor="pwd">Password</label>
        <input
          id="pwd"
          type="password"
          value={inputs.pwd}
          onChange={(event) => validatePassword(event)}
        />
        <p className="errorMsg" data-password-msg>
          {error.password}
        </p>
      </div>
      <div>
        <label htmlFor="pwdConfirm">Confirm password</label>
        <input
          id="pwdConfirm"
          type="password"
          value={inputs.passwordConfirm}
          onChange={(event) => validatePasswordConfirm(event)}
        />
        <p className="errorMsg" data-password-confirm-msg>
          {error.passwordConfirm}
        </p>
      </div>
      <button type="submit" onClick={(event) => createUser(event)}>
        Sign up
      </button>
    </form>
  );
}

export default Form;
