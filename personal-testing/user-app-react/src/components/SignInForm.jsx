import { useState } from 'react';
import { Link } from 'react-router-dom'

function SignInForm({onSignIn, goToSignUp}) {
    
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const updateUsername  = (event) => {
        setUsername(event.target.value)
    }

    const updatePassword = (event) => {
        setPassword(event.target.value);
    }

    const trySignIn = (event) => {
        event.preventDefault()
        onSignIn(username, password)
    }

    const toggleSignUp = (event) => {
        event.preventDefault()
        goToSignUp()
    }

    return(
        <>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" onChange={updateUsername} />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" onChange={updatePassword} />
                <button type="submit" onClick={trySignIn}>Sign in</button>
                <p>Don't have an accout? <a href="#" onClick={toggleSignUp}>Sign up here</a></p>
            </form>
        </>
    )
}

export default SignInForm