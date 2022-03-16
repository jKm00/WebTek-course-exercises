import { useState } from "react";

function Form() {
  const errorState = ["invalid", "valid", "medium", "default"];

  const [validUsername, setValidUsername] = useState(false);
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const usernameMsg = document.querySelector("[data-username-msg]");

  const [validEmail, setValidEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [validPwd, setValidPwd] = useState(false);
  const [pwd, setPwd] = useState("");
  const [pwdStrength, setPwdStrength] = useState("");
  const pwdErrorMsg = document.querySelector("[data-pwd-error]");

  const [validPwdConfirm, setValidPwdConfirm] = useState(false);
  const [pwdConfirm, setPwdConfirm] = useState("");
  const [pwdConfirmErrorMsg, setPwdConfirmErrorMsg] = useState("");
  const pwdConfirmError = document.querySelector("[data-pwd-confirm-error]");

  function validateUsername(event) {
    const newUsername = event.target.value;
    setUsername(newUsername);

    if (newUsername === "") {
      setValidUsername(false);
      setUsernameError("");
    } else if (!newUsername.match(/^([a-zA-Z0-9-_]){1,30}$/)) {
      setValidUsername(false);
      makeInvalid(usernameMsg);
      setUsernameError(
        "Username must be between 8 and 30 characters and only contain letters and numbers"
      );
    } else {
      setValidUsername(true);
      makeValid(usernameMsg);
      setUsernameError("Valid username");
    }
  }

  function validateEmail(event) {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (newEmail.match(regex)) {
      setValidEmail(true);
      setEmailError("Valid email!");
    } else {
      setValidEmail(false);
      setEmailError("");
    }
  }

  function validatePassword(event) {
    const newPwd = event.target.value;
    setPwd(newPwd);

    let strongRegex = new RegExp(
      "^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$",
      "g"
    );
    let mediumRegex = new RegExp(
      "^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$",
      "g"
    );
    let enoughRegex = new RegExp("(?=.{8,}).*", "g");

    if (newPwd === "") {
      setValidPwd(false);
      setPwdStrength("");
    } else if (newPwd.match(strongRegex)) {
      setValidPwd(true);
      makeValid(pwdErrorMsg);
      setPwdStrength("Very strong");
    } else if (newPwd.match(mediumRegex)) {
      setValidPwd(true);
      makeMedium(pwdErrorMsg);
      setPwdStrength("Medium");
    } else if (newPwd.match(enoughRegex)) {
      setValidPwd(true);
      makeInvalid(pwdErrorMsg);
      setPwdStrength("Weak");
    } else {
      setValidPwd(false);
      makeDefault(pwdErrorMsg);
      setPwdStrength("More characters");
    }
  }

  function validatePasswordConfirm(event) {
    const newPwdConfirm = event.target.value;
    setPwdConfirm(newPwdConfirm);

    if (newPwdConfirm === "") {
      setValidPwdConfirm(false);
      setPwdConfirmErrorMsg("");
    } else if (newPwdConfirm !== pwd) {
      setValidPwdConfirm(false);
      makeInvalid(pwdConfirmError);
      setPwdConfirmErrorMsg("Passwords must match");
    } else {
      setValidPwdConfirm(true);
      makeValid(pwdConfirmError);
      setPwdConfirmErrorMsg("Matching passwords");
    }
  }

  function makeValid(element) {
    removeErrorStates(element);
    element.classList.add("valid");
  }

  function makeInvalid(element) {
    removeErrorStates(element);
    element.classList.add("invalid");
  }

  function makeMedium(element) {
    removeErrorStates(element);
    element.classList.add("medium");
  }

  function makeDefault(element) {
    removeErrorStates(element);
    element.classList.add("default");
  }

  function removeErrorStates(element) {
    for (const index in errorState) {
      element.classList.remove(errorState[index]);
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
          value={username}
          onChange={(event) => validateUsername(event)}
        ></input>
        <p className="errorMsg" data-username-msg>
          {usernameError}
        </p>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => validateEmail(event)}
        />
        <p className="errorMsg valid">{emailError}</p>
      </div>
      <div>
        <label htmlFor="pwd">Password</label>
        <input
          id="pwd"
          type="password"
          value={pwd}
          onChange={(event) => validatePassword(event)}
        />
        <p className="errorMsg" data-pwd-error>
          {pwdStrength}
        </p>
      </div>
      <div>
        <label htmlFor="pwdConfirm">Confirm password</label>
        <input
          id="pwdConfirm"
          type="password"
          value={pwdConfirm}
          onChange={(event) => validatePasswordConfirm(event)}
        />
        <p className="errorMsg invalid" data-pwd-confirm-error>
          {pwdConfirmErrorMsg}
        </p>
      </div>
      <button type="submit">Sign up</button>
    </form>
  );
}

export default Form;
