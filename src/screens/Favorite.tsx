import React, { useCallback, useState } from 'react';
import {ViewBase, StyleSheet, Text, View , Button , ScrollView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { getFavoritesPokemon, getPokemonLocalStorage } from '../util/api';
import { useFocusEffect , useNavigation} from '@react-navigation/native';
import { TPokemon } from '../util/const';
import PokomonCards from '../componentes/components/PokemonCard';
import useAuth from '../hooks/useAuth';


const Stack = createStackNavigator();
//const { auth }= useAuth()
const Favorite = ():JSX.Element => {
  const { auth }= useAuth()
  const [ pokemon, setPokemon ] = useState<TPokemon[] | null >(null)
  const navigation = useNavigation()
  const goToPage = (pageName:string)=>{
    navigation.navigate(pageName)
    //Account
}

    useFocusEffect(
      useCallback(()=>{
        (async ()=>{
          const pokemonSaved = await getPokemonLocalStorage()
          const response = await getFavoritesPokemon(pokemonSaved)
          setPokemon(response);
          })();


        (async ()=>{
       
      })()
      },[])
    )

return(         
<>     
     { auth? MostrarFavoritos(pokemon):
     (<View style={[styles.container,{height:'100%',marginTop:90}]} >
       <Text style={styles.title}> Debes de entrar para poder ver tus favoritos,</Text>
       <Button title='Ir a Loging' onPress={()=>goToPage('Account')}/>
     </View>
    )}

</>)}           

export default Favorite ;


const MostrarFavoritos = (pokemon:[]):JSX.Element => {

return(
<> 
<View style={styles.container}>
      <Text style={styles.title} >  {pokemon?.length}</Text>
      
    </View> 
      <ScrollView>

      {  pokemon && pokemon.map((pokemon, index )=> <PokomonCards key={index} poke={pokemon} />)}
      </ScrollView>

</>
)}




const styles = StyleSheet.create({
  container:{
    width:'100%',
    display:"flex",
    alignItems:"center"
  },
  title:{
    fontSize:28,
    fontWeight:"bold"
  }
})