import React, { useEffect, useState } from 'react';
import {ViewBase,Button, StyleSheet, Text, View } from 'react-native';
import {getPokemon, getPokemonLocalStorage} from '../util/api';
import { TPokemon, Type } from '../util/const';
import PokemonList from '../componentes/components/PokemonList';
import useAuth from '../hooks/useAuth';
import { TAuthContext } from '../context/Auth.context';


const Pokedex = (Props:any):JSX.Element => {
  const [pokemon , setPokemon] = useState<TPokemon[]>()
  
  const data = useAuth()

  async function verFavoritos(){
    const pokemonSaved = await getPokemonLocalStorage()
    data.addAllPokemon(pokemonSaved)
  }
  useEffect(()=>{
    verFavoritos()
    getPokemon().then(items =>{
    setPokemon(items)
    })
  },[])


 const goToPage = (pageName:string)=>{
    const { navigation } = Props
    navigation.navigate(pageName)
    }

return(         
<>              
    <View>
      <PokemonList setPokemon={setPokemon} pokemon={pokemon!}/>
    </View>      
    <Button title="gooo" onPress={()=>goToPage("Pokemon")}/>       
</>)}           

export default Pokedex ;