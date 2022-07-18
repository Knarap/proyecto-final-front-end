import { useContext } from "react";
import authContext from "./../helpers/authProvider";

const useAuth = () =>{
    return useContext(authContext);

}

export default useAuth;
