import { StyleSheet, Text, View, Button } from 'react-native';
import PokeBoton from './Boton';

type Props ={
  isStats:boolean
  setIsStats:any
}

const PokemonMenu = ({isStats,setIsStats}:Props):JSX.Element => {

return(         
<>              
  <View style={styles.main}>
  <PokeBoton setIsStats={setIsStats} isStats={!isStats} type={'About'} />
  <PokeBoton setIsStats={setIsStats} isStats={isStats} type={'Stats'} />
 
  </View>
</>
)}           

export default PokemonMenu ;

const styles = StyleSheet.create({
  main:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
    position:"relative",
    bottom:10
    
  }
})