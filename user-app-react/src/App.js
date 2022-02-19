import { useEffect, useState } from 'react';

import SignInForm from './components/SignInForm'

const LOCAL_STORAGE_KEY = 'userApp.user'

function App() {

  const [user, setUser] = useState({
    "uid": "",
    "username": ""
  })

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedUser) setUser(storedUser)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user))
  }, [user])

  const signIn = (username, password) => {
    if (username !== "" && password !== "") {
      fetch('http://localhost:8080/users/' + username)
        .then(response => response.json())
        .then(data => {
          if (password === data.password) {
            setUser({
              "uid": data.id,
              "username": data.username
            })
          }
        })
    }
  }

  const signOut = () => {
    setUser({
      "uid": "",
      "username": ""
    })
  }

  return (
    user.uid === "" ? (
      <SignInForm onSignIn={signIn} />
    ) : (
      <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      </>
    )
  );
}

export default App;
