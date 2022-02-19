import { useState } from 'react'

function SignUpForm({onSignUp, goToSignIn}) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();

    const [errorMsg, setErrorMsg] = useState("");

    const updateUsername = (event) => {
        setUsername(event.target.value)
    }

    const updatePassword = (event) => {
        setPassword(event.target.value)
    }

    const updatePasswordConfirm = (event) => {
        setPasswordConfirm(event.target.value)
    }

    const trySignUp = (event) => {
        event.preventDefault()
        if (password === passwordConfirm) {
            onSignUp(username, password)
        } else {
            setErrorMsg("Missmatch in passwords")
        }
    }

    const toggleSignUp = (event) => {
        event.preventDefault()
        goToSignIn()
    }

    return(
        <>
            {errorMsg !== "" ? (
                <form>
                    <p>{errorMsg}</p>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" onChange={updateUsername}/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password"  onChange={updatePassword}/>
                    <label htmlFor="password-confirm">Confirm password</label>
                    <input type="password" id="password-confirm"  onChange={updatePasswordConfirm}/>
                    <button type="submit" onClick={trySignUp}>Sign up</button>
                    <p>Already have an account? <a href="#" onClick={toggleSignUp}>Sign in here</a></p>
                </form>
            ) : (
                <form>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" onChange={updateUsername}/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password"  onChange={updatePassword}/>
                    <label htmlFor="password-confirm">Confirm password</label>
                    <input type="password" id="password-confirm"  onChange={updatePasswordConfirm}/>
                    <button type="submit" onClick={trySignUp}>Sign up</button>
                    <p>Already have an account? <a href="#" onClick={toggleSignUp}>Sign in here</a></p>
                </form>
            )}
        </>
    )
}

export default SignUpForm