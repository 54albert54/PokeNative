

import { Button, StyleSheet, Text, View , Image , TouchableWithoutFeedback } from 'react-native';
import { Colors, POKEMON_TYPE_COLORS, TPokemon } from '../utils/const';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import PokemonStats from '../componentes/components/PokemonStaft';
import PokemonMenu from '../componentes/components/PokemonMenu';
const Pokemon = (Props:any):JSX.Element => {
  const [isShinny, setIsShinny ] =useState(false)
  const { navigation,route } = Props
  const data = route.params.id as TPokemon
  const stastPokemon = data.stats
  route as TPokemon
  console.log('Props-----------',data.stats[0])
  const poke = route.params.id
  const colorData:Colors    = poke.types?.[0].type.name as Colors
  const moreType = poke.types.length > 1
  let colorData2 ="X"
  if (moreType){
  
    colorData2 = poke.types?.[1].type.name as Colors
  }

  //
   console.log('mas tipos',poke.types.length)
  const numeral:string = POKEMON_TYPE_COLORS[colorData]

  const bgStyle =()=>{
    const shageStyles = {
      right:isShinny?0:54,
      backgroundColor:isShinny?"#A8b821":"#E0C068"
    }
      
      const style = { ...shageStyles,...styles.boton}
      return style
  }
  const goToPage = (pageName:string)=>{
    
  navigation.navigate(pageName)
  }
  const Forma = isShinny?'front_shiny':'front_default'
  const changeShiny= ()=>{
    setIsShinny(!isShinny)
  }

  const imgUrl:string = poke?.sprites?.other?.['official-artwork'][Forma]!;
  let num = poke.id.toString()
  if (num.length ==1){
    num = "00"+num;
  }else if (num.length ==2){
    num = "0"+num;
  }

return(         
<>             
<TouchableWithoutFeedback >
<LinearGradient
     // colors={['rgba(f,f,0,0.8)', 'transparent']}
        colors={[numeral, '#fffa']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
    <View style={styles.container} >
      <View style={styles.type}>
        <Text  style={styles.typeT} >
        {colorData}
        </Text>
        {moreType && <Text style={styles.typeT} >{colorData2}</Text>}
        </View>
        
        <Image style={styles.img2 } source={require("../screens/assets/shadow.png")}/>
        <View style={styles.botonContainer}>
        <View style={bgStyle()}>
          <Text style={{color:'#fff'}}  onPress={()=>changeShiny()}>
          {isShinny?'Shiny':'Normal'}
          </Text>
        </View>
        </View>
        
    <Text style={styles.title}>#{num} -   {poke.name} </Text>
    
    <Image style={styles.img } source={{uri: imgUrl}}/>

    </View>
    <PokemonMenu/>
    <View style={styles.infoContainer}>

    <PokemonStats stast={stastPokemon}/>
    </View>
    
    </LinearGradient> 
  </TouchableWithoutFeedback>   
</>)}           

export default Pokemon ;

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:410,
    height:120,
    margin:10,
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    borderRadius:15,
    overflow:"hidden"
    },
    infoContainer:{
      width:'100%',
      height:290,
      borderWidth:0,
      borderColor: '#000',
      borderStyle:"solid",
      position:"relative",
      bottom:10,
      borderRadius:10,
      
    },
    botonContainer:{
      width:120,
      height:38,
      borderWidth:3,
      borderColor: '#000',
      borderStyle:"solid",
      position:"relative",
      top:350,
      borderRadius:10,
      backgroundColor:"#000000be"
    },
    boton:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      color:"#fff",
      width:60,
      height:31,
      fontSize:16,
      fontWeight:"bold",
      borderRadius:8,
      position:"absolute",
    }
    ,
  gradient: {
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  img:{
    width:320,
    height:320,
    position:"absolute",
    top:24,
    right:49
  },
  title:{
    fontSize:14,
    position:"absolute",
    left:140,
    bottom:130,
    textTransform:"uppercase",
    fontWeight:"bold"
  },
  type:{
    display:"flex",
    flexDirection:"row",
    gap:20,
    position:"absolute",
    right:10,
    top:10,
    minWidth:50,
    padding:10,
    fontStyle:"italic", 
    borderRadius:10,
    backgroundColor:"#ffffff35"
  },
  typeT:{
    color:"#fff",
    textTransform:"uppercase",
    fontWeight:"bold",
    marginVertical:4,
  },
  img2:{
    width:360,
    height:360,
    opacity:.25,
    position:"absolute",
    top:84,
    right:30
  }
  
});