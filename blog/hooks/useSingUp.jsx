import {useAuthContext} from "./useAuthContext.jsx" 

export const useSignUp = () =>{
    const {dispatch} = useAuthContext()

    const singUp = async (first_name,last_name,date_of_birth,username,password)=>{
        const response = await fetch("http://localhost:3000/api/user/signup",{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                first_name,
                last_name,
                date_of_birth,
                username,
                password
            })
        })
        const json = await response.json()

        return json.msg
        
        /*
        esto tiene sentido si loggeamos una vez que realizamos el registro
        if(response.ok){
            localStorage.setItem("user",JSON.stringify(json))

            dispatch({type:"LOGIN",payload: json})
            return json.msg
        } else{
            return json.msg
        }
        */
    }

    return singUp
}