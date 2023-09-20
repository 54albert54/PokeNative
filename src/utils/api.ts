import { TPokemon, Url } from "./const";

import axios from 'axios';

async function  getPokemon(id:number = 20){
 
    const pokeArray = []
  
 for (let i = 1 ; i < id +1 ; i++){
  const response = await axios.get<TPokemon>(Url+i)
  pokeArray.push(response.data )
 }


return   pokeArray    

}
export default getPokemon ;