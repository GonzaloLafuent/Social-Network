import { useAuthContext } from "./useAuthContext"

export const useLogOut = () =>{
    const {dispatch} = useAuthContext()

    const logOut = () =>{
        //ya no depende del backende por que tenemos el web token en local storage
        //y manejamos el contexto desde aca
        localStorage.removeItem("user")
        dispatch({type:"LOGOUT"})
    }

    return logOut
}