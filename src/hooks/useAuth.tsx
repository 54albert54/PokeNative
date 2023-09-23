import { useContext } from "react";
import { AuthContext, TAuthContext } from "../context/Auth.context";



export default ()=> useContext(AuthContext) as TAuthContext


