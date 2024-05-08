import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import {useLogOut} from"../hooks/useLogOut"
import "./styles/NavBar.css"

const NavBar = ()=>{
    const {user} = useAuthContext()
    const logOut = useLogOut()

    function handleSumbit(){
        logOut()
    }

    return(
        <nav id="nav-bar">
            {!user? 
                <h2>Welcome to Bloguie</h2> 
                : 
                 <div id="profile">
                    <Link to=""><img src="./profile-icon.svg" alt="" className="icon" id="profile-icon"/></Link>
                    <h3>Welcome back {user && user.username}!</h3>
                </div>
            } 
            {user && 
                <div id="search-bar">
                    <Link to=""><img src="./search-icon.svg" alt="" id="search-icon" className="icon"/></Link>
                    <input type="text" name="search" id="search" placeholder="Look up your friends!"/>
                </div>
            }
            <div id="links">
                {!user?
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/SignUp">Sign up</Link>
                    </>
                    :
                    <>
                        <Link to=""><img src="./save-icon.svg" alt="" id="save-icon" className="icon"/></Link>
                        <Link to=""><img src="./configuration-icon.svg" alt="" id="configuration-icon" className="icon"/></Link>
                        <button onClick={handleSumbit}>log-out</button>
                    </>
                }
            </div>
            
        </nav>
    )
}

export default NavBar