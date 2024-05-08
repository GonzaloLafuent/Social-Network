import "./styles/LoginIn.css"
import "./styles/index.css"
import {uselogIn} from "../hooks/useLogIn"
import { useRef,useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"

function LogIn(){
    const [message,setMessage] = useState("")
    const logIn = uselogIn() 
    const {user} = useAuthContext() 

    const usernameInput = useRef(null)
    const passwordInput = useRef(null)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setMessage(
            await logIn(
                usernameInput.current.value,
                passwordInput.current.value
            )
        )
    }

    return (
        <>
           <form action="" method="post">
                <h1>Welcome to Bloguie!</h1>
                <h4>Discover whats new! Connect with all your friends in an interactive way</h4>
                <label htmlFor="username">
                    Username:
                    <input type="text" name="username" id="username" placeholder="What's your funny nickname?" ref={usernameInput}/>
                </label>
                <label htmlFor="password">
                    Password:
                    <input type="password" name="password" id="password" placeholder="Don't share it.." ref={passwordInput}/>
                </label>
                <button type="submit" onClick={handleSubmit}>Log in</button>
                <p>You don't have an account? <a href="">Sign up</a></p>
                <p>{message}</p>
           </form>
        </>
    )
}

export default LogIn