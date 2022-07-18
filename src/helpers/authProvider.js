import { createContext, useState } from "react";
const authContext = createContext({});

export const AsuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});

    return(
        <authContext.Provider value = {{auth,setAuth}}>{children}
        </authContext.Provider>
    )
}

export default authContext;

