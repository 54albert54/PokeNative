import { TPokemon, Url } from "./const";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FAVORITE_STORAGE } from "./const" 
import axios from 'axios';

export async function  getPokemon(id:number = 20){
const pokeArray = []
  for (let i = 1 ; i < id +1 ; i++){
    const response = await axios.get<TPokemon>(Url+i)
    pokeArray.push(response.data )
  }
return   pokeArray    
}
export async  function getFavoritesPokemon (pokemonFavorites:[]){
  const pokeArray:TPokemon[] = []
  for (let i = 0 ; i < pokemonFavorites.length  ; i++){
    const response = await axios.get<TPokemon>(Url+pokemonFavorites[i])
  
    pokeArray.push(response.data )
  }
return   pokeArray  

}

export async function getPokemonLocalStorage (){
  try {
    const response =  await AsyncStorage.getItem(FAVORITE_STORAGE) || [151,32,25]
    
    const pokemonSaved = JSON.parse(response);
    const pokemonSaved2 = JSON.parse(pokemonSaved)
    
    return pokemonSaved2 ;
  } catch (error) {
    throw(error)
  }
}

export async function addPokemonLocalStorage (id:number){
  try {
   
    let favorite =  await getPokemonLocalStorage();
    favorite.push(id)
    const dataToSave = JSON.stringify(favorite)
    const newData = JSON.stringify(dataToSave)
    

    await AsyncStorage.setItem(FAVORITE_STORAGE, newData)
    
   
    
  } catch (error) {
    throw(error)
  }
}

export async function isPokemonFaforite(id:number) {
  try {
    const response = await getPokemonLocalStorage()
    const isIn:boolean = response.includes(id)
    
    return isIn

  } catch (error) {
    
  }
}

export async function removeOfFavorite(id:number){
  const hasID = await isPokemonFaforite(id)
  if (hasID){
    const pokemons = await getPokemonLocalStorage() as Array<number>
    const newFavorite =   pokemons.filter(ids => ids != id)
    const newData = JSON.stringify(newFavorite)
    const newData2 = JSON.stringify(newData)
    
    
    await AsyncStorage.setItem(FAVORITE_STORAGE, newData2)
    

  }

}