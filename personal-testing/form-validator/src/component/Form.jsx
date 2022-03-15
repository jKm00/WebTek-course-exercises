import { useState } from "react";

function Form() {
  const usernameErrorMsg = document.querySelector("[data-username-error]");
  const [username, setUsername] = useState("");

  function validateUsername(event) {
    const newUsername = event.target.value;
    setUsername(newUsername);

    if (newUsername.length < 8 || username.length > 30) {
      usernameErrorMsg.innerHTML =
        "Username must be between 8 and 30 characters";
    } else if (!newUsername.match(/^[a-zA-Z0-9_]+$/)) {
      usernameErrorMsg.innerHTML =
        "Username can only contain letters and numbers";
    } else {
      usernameErrorMsg.innerHTML = "";
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
        <p data-username-error></p>
      </div>
    </form>
  );
}

export default Form;
