import { useContext, useState } from "react"
import UserContext from "../context/user-context"

export default function UserProvider() {

    const [userContext, setUserContext] = useState(
        {
            isLogged: false,
            email: null,
            
         }
    );

    function updateContext(email) {
        setUserContext();
    }
    
    return(
        <>

        </>
    )
}