
import { Button, StyleSheet, Text, View , Image , TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import { Colors, POKEMON_TYPE_COLORS, TPokemon } from "../../utils/const";



type Props={
  poke:TPokemon
}




const PokomonCards = ({poke}:Props):JSX.Element => {
  const colorData:Colors  = poke.types?.[0].type.name as Colors
  const navigation = useNavigation()


  const bgStyle =()=>{
      const numeral:string = POKEMON_TYPE_COLORS[colorData]
      const style = {backgroundColor:numeral,...styles.container}
      return style
  }
  const gotoPokemon = ()=>{
  
  navigation.navigate("Pokemon",{id:poke})
}

const imgUrl:string = poke?.sprites?.other?.['official-artwork'].front_default!;
let num = poke.id.toString()
if (num.length ==1){
  num = "00"+num;
}else if (num.length ==2){
  num = "0"+num;
}



return(         
  <TouchableWithoutFeedback onPress={gotoPokemon}>
    <View style={bgStyle()} >
      <View style={styles.type}>
        <Text  style={styles.typeT} >
        {colorData}
        </Text>
        </View>
        <Image style={styles.img2 } source={require("../../screens/assets/shadow.png")}/>
    <Text style={styles.title}>#{num} -   {poke.name} </Text>
    <Image style={styles.img } source={{uri: imgUrl}}/>
    </View>
    
  </TouchableWithoutFeedback>
  )}           

export default PokomonCards ;

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:120,
    height:120,
    margin:10,
    display:"flex",
    justifyContent:"space-between",
    flexDirection:"column",
    alignItems:"center",
    borderRadius:15,
    overflow:"hidden"
    },
  img:{
    width:80,
    height:80,
    position:"absolute",
    top:2,
    right:19
  },
  title:{
    fontSize:14,
    position:"absolute",
    left:14,
    bottom:10,
    textTransform:"uppercase",
    fontWeight:"bold"
  },
  type:{
    position:"absolute",
    left:10,
    top:10,
    padding:10,
    fontStyle:"italic", 
    borderRadius:10,
    backgroundColor:"#ffffff35"
  },
  typeT:{
    color:"#fff",
    textTransform:"uppercase",
    fontWeight:"bold",
  },
  img2:{
    width:160,
    height:160,
    opacity:.25,
    position:"absolute",
    top:14,
    right:-30
  }
  
});