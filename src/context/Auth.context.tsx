import { createContext, useState } from "react";
import { TuserData as TuserData } from "../util/Types";
import { array, boolean } from "yup";

export type TAuthContext = {
  auth:object,
  loging:(userdata:TuserData)=>{}
  logOut:()=>{}
  pokefavori:boolean 
  addAllPokemon:(a:boolean)=>{}
};

export const AuthContext = createContext({})

export const AuthProvider = (props:any) =>{
  const {children }= props;
  const [auth, setAuth ] = useState<TuserData | undefined>(undefined);
  const [pokefavori, setPokemonfavori] = useState(boolean)

  const loging = (useData:TuserData) =>{
    setAuth(useData)
  }
  const logOut = () =>{
    setAuth(undefined)
  }
  const addAllPokemon = (a:boolean)=>{
    if (typeof a == "string")
    setPokemonfavori(a)
  }

  const valueContext = {
    auth,
    loging,
    logOut,
    pokefavori,
    addAllPokemon,
  };
  return(
    <AuthContext.Provider value={valueContext }>
      {children}
    </AuthContext.Provider>
  )
} 