import {useAuthContext} from "./useAuthContext"

//Hook para loggearse
export const uselogIn = ()=>{
    const {dispatch,state} = useAuthContext()
    console.log("estado: " + state)

    const logIn = async (username,password)=>{
        const response = await fetch("http://localhost:3000/api/user/login",{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                username,
                password
            })
        })
        const json = await response.json()
        
        if(response.ok){
            localStorage.setItem("user",JSON.stringify(json))
            dispatch({type:"LOGIN",payload: json})
        } else{
            return json.msg
        }

    }

    return logIn
}