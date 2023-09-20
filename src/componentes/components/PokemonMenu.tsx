import { StyleSheet, Text, View } from 'react-native';



const PokemonMenu = ():JSX.Element => {

return(         
<>              
  <View style={styles.main}>
  <View>
    <Text onPress={()=>console.log('desde el About')}>About</Text>
  </View>
  <View >
    <Text onPress={()=>console.log('desde el Stats')} >Stats</Text>
  </View>
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
    marginBottom:20
  }
})