import { useState, useRef } from 'react'
import './styles/SignUp.css'
import { useSignUp } from '../hooks/useSingUp'

function SignUp() {
  const [registerState,setRegisterState] = useState("")
  const signUp = useSignUp()

  const nameInput = useRef(null)
  const lastnameInput = useRef(null)
  const usernameInput = useRef(null)
  const dateInput = useRef(null)
  const passwordInput = useRef(null)
 
  async function handleClick(e){
    e.preventDefault()
    const response = await signUp(
      nameInput.current.value,
      lastnameInput.current.value,
      dateInput.current.value,
      usernameInput.current.value,
      passwordInput.current.value,
    )
    setRegisterState(response)
  }
  

  return (
    <>
        <form method="post">
          <h1>Start with Bloguie!</h1>
          <h2>Be part of us!</h2>
          <fieldset id="personal-info">
            <label htmlFor="name" className="label-personal-info">Name:
              <input type="text" name="name" id="name" placeholder="your name" ref={nameInput}/>
            </label>
            <label htmlFor="lastname" className="label-personal-info">Lastname:
              <input type="text" name="lastname" id="lastname" placeholder="Whats your families name?" ref={lastnameInput}/>
            </label>
            <label htmlFor="date-birth" className="label-personal-info">Date of Birth:
              <input type="date" name="date-birth" id="date-birth" ref={dateInput}/>
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" placeholder='Think a clever username!' ref={usernameInput}/>  
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" placeholder='Make it safe' ref={passwordInput}/>
          </fieldset>
          <button id="submit" onClick={handleClick}>Sign up!</button>
          <p>Already have an account? <a href="">Log in</a> </p>
          <p>{registerState}</p>
        </form>  
    </>
  )
}

export default SignUp
