import { AuthContext } from "../context/authContext";
import { useContext } from "react";

//Hook para el contexto de autorizacion
export const useAuthContext = ()=> {
    const context = useContext(AuthContext)
    return context
}



