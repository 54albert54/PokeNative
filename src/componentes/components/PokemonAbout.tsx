import { ScrollView, Button, StyleSheet, Text, View , Image , TouchableWithoutFeedback } from 'react-native';
import { POKEMON_TYPE_COLORS } from '../../util/const';

type PokeDatos = {
  height:string
    weight:string
    ability:string
    num:string
    types:any

}

type Props = {
  pokeDatos :PokeDatos
}
const PokemonAbout = ({pokeDatos}:Props):JSX.Element => {

  const colorData   = pokeDatos.types?.[0].type.name 
  const moreType = pokeDatos.types.length > 1
  let colorData2 ="X"
  if (moreType){
  
    colorData2 = pokeDatos.types?.[1].type.name
  }
  const textColor = ()=>{
    const numeral:string = POKEMON_TYPE_COLORS[colorData]
    const color = {  color:numeral}
    return {...color,...styles.typeT}
  }



return( 
    
  <View  style={styles.container}>
<View style={styles.ability} >  
  <Text style={styles.tile}>ABILITY</Text>            
  <Text style={styles.data}>{pokeDatos.ability}</Text>            
</View>
<View style={styles.containData}>  
<View style={{display:"flex",flexDirection:"row",alignItems:"flex-end"}}>
  <Text style={styles.tile}>WEIGHT </Text>            
  <Text style={styles.data}>{pokeDatos.weight}</Text>            
<Text>bls</Text>
</View>
<View style={{display:"flex",flexDirection:"row"}}>
  <Text style={styles.tile}>HEIGHT </Text>            
  <Text style={styles.data}>{pokeDatos.height}</Text>            
  <Text>''</Text>
</View>
<View style={styles.type}>
        <Text  style={textColor()} >
        {colorData}
        </Text>
        {moreType && <Text style={textColor()} >{colorData2}</Text>}
        </View>    
           
</View>

<View>
</View>    
</View>

)}           

export default PokemonAbout ;


const styles = StyleSheet.create({
  ability:{
    width:230,
    height:70,
    backgroundColor:"#ffffff50",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:20,
  },
  container:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  tile:{
    fontSize:24,
    fontWeight:"bold"
  },
  data:{
    fontSize:24,
    fontWeight:"200"
  },
  containData:{
    width:380,
    height:50,
    backgroundColor:"#ffffff50",
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:30,
    borderRadius:20,
    marginTop:10
  },
  type:{
    display:"flex",
    flexDirection:"row",
    gap:20,
    position:"absolute",
    right:0,
    top:60,
    width:"100%",
    padding:10,
    fontStyle:"italic", 
    borderRadius:10,
    justifyContent:"center"
  },
  typeT:{
    textTransform:"uppercase",
    fontWeight:"bold",
    marginVertical:4,
    fontSize:40
  }

})