import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext.jsx"
import SignUp from './SignUp.jsx'
import LogIn from './LogIn.jsx'
import Home from "./Home.jsx"
import NavBar from "./NavBar.jsx"
import Footer from "./Footer.jsx"


function App(){
    const {user} = useAuthContext()

    //Rutas de la aplicacion
    return(
        <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
                <Route 
                    path="/" element={user? <Home/>:<Navigate to="/login"/>}
                />
                <Route 
                    path="/signup" element={!user? <SignUp/> : <Navigate to="/"/> }
                />
                <Route 
                    path="/login" element={!user? <LogIn/> :<Navigate to="/"/>}
                />
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    )
}

export default App