import { Button, Text, View,FlatList,StyleSheet ,ActivityIndicator } from "react-native";
import { TPokemon } from "../../utils/const";
import PokomonCards from "./PokemonCard";
import getPokemon from "../../utils/api";
import { useState } from "react";
type Props ={
  pokemon:TPokemon[],
  setPokemon:(a:TPokemon[])=>{}
}
const PokemonList = ({setPokemon,pokemon}:Props):JSX.Element => {
  const [index , setIndex] = useState(20)
const cargandoMasPokemon = ()=>{
  getPokemon(index).then(items =>setPokemon(items) )
  setIndex(index+20)
}

return(         
<FlatList
data={pokemon}
numColumns={2}
showsVerticalScrollIndicator={false}
keyExtractor={pokemon =>String(pokemon.id)}
renderItem={({item})=><PokomonCards poke={item} />}
columnWrapperStyle={style.flatListContenContainer}
onEndReached={cargandoMasPokemon}
onEndReachedThreshold={0.9}
ListFooterComponent={
  <ActivityIndicator
  size="large"
  style={style.spinner}
  />
}
>
  
</FlatList>
  )}           

export default PokemonList ;

const style = StyleSheet.create({
  flatListContenContainer:{
    paddingHorizontal:1
  },
  spinner:{
    marginTop:20,
    marginBottom:80
  }
})