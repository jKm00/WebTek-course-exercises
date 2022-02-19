import { useState } from 'react';

function SignInForm({onSignIn}) {
    
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

    return(
        <>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" onChange={updateUsername} />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" onChange={updatePassword} />
                <button type="submit" onClick={trySignIn}>Sign in</button>
            </form>
        </>
    )
}

export default SignInForm