import { Button, Text, View ,StyleSheet ,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TPokemon } from '../../util/const';
import { addPokemonLocalStorage, isPokemonFaforite, removeOfFavorite } from '../../util/api';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

type Props = {
  pokemon: TPokemon
}
const AddFavorites = ({pokemon }:Props):JSX.Element => {
  const [isIn, setIsIn] = useState(false)
  const navigation = useNavigation()
  const goToPage = (pageName:string)=>{
    // console.log('os',Platform.OS)
    removeOfFavorite(pokemon.id)
    setIsIn(false)
    //navigation.navigate(pageName)
  }
  useEffect(  ()=>{
    (async () => {
      const icons = await isPokemonFaforite(pokemon.id)
      if (typeof icons == "boolean"){
      setIsIn(icons)
    }
    })()
  },[isIn])

  
  const addToFavorite = ()=>{
    setIsIn(true)
    addPokemonLocalStorage(pokemon.id)
  }

return(
<> 
  {isIn?
  <Icon style={styles.icon} 
  name='check' size={30} color="#fff" 
  onPress={()=>goToPage("favorite")}/>
  :<Icon style={styles.icon} name='heart' size={30} color="#fff" onPress={()=>addToFavorite()}/>}
</>
)}

export default AddFavorites ;

const styles = StyleSheet.create({
  icon:{
    marginRight:20,
    marginTop:15
  }
})