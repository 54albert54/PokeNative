import React, { useEffect, useState } from 'react';
import {ViewBase,Button, StyleSheet, Text, View } from 'react-native';
import getPokemon from '../utils/api';
import { TPokemon, Type } from '../utils/const';
import PokemonList from '../componentes/components/PokemonList';


const Pokedex = (Props:any):JSX.Element => {
  const [pokemon , setPokemon] = useState<TPokemon[]>()

  useEffect(()=>{

 getPokemon().then(items =>{
  
  
setPokemon(items)
// pokemon?.map(poke => {
//   console.log('pokemon',poke.name)
// })

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