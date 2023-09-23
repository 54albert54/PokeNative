

import { Button, StyleSheet, Text, View , Image , TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors, POKEMON_TYPE_COLORS, TPokemon, evolution, evolutionPokemons } from '../util/const';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import PokemonStats from '../componentes/components/PokemonStaft';
import PokemonMenu from '../componentes/components/PokemonMenu';
import PokemonAbout from '../componentes/components/PokemonAbout';
import AddFavorites from '../componentes/components/addFavorite';
import useAuth from '../hooks/useAuth';
const Pokemon = (Props:any):JSX.Element => {
  const { auth  } = useAuth()
  const [isShinny, setIsShinny ] =useState(false)
  const [isStats, setIsStats ] =useState(false)
  const { navigation,route } = Props
  const data = route.params.id as TPokemon
  const stastPokemon = data.stats
  route as TPokemon
  const poke = route.params.id as TPokemon
  useEffect(()=>{
    navigation.setOptions({
      headerRight:()=>auth?<AddFavorites pokemon={poke}/>:"",
      //  <Icon name='check' color="#fff" size={30}style={{margin:6,height:30,marginTop:40}}  onPress={()=>navigation.navigate('favorite')}/>,
      headerLeft:()=> <Icon name='arrow-left' color="#fff" size={30}style={{margin:6,height:30,marginTop:40}}  onPress={()=>navigation.goBack()}/>
    })
    
  },[navigation,poke])
  

  
  const colorData:Colors    = poke.types?.[0].type.name as Colors


 
  
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
  const pokeDatos = {
    height:poke.height,
    weight:poke.weight,
    ability:poke.abilities[0].ability.name,
    types:poke.types,
    num,
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
      
        
        <Image style={styles.img2 } source={require("../screens/assets/shadow.png")}/>
        <View style={styles.botonContainer}>
        <View style={bgStyle()}>
          <Button title=' ' onPress={()=>changeShiny()} />
          <Text style={{color:'#fff',bottom:16}}  onPress={()=>changeShiny()}>
          {isShinny?'Shiny':'Normal'}
          </Text>
        </View>
        </View>
        
    
    <View style={styles.nameCont}>
    <Text style={styles.name}>{poke.name} </Text>

    </View>
    
    <Image style={styles.img } source={{uri: imgUrl}}/>

    </View>
    <PokemonMenu isStats={isStats} setIsStats={setIsStats}/>
    <View style={styles.infoContainer}>
    {!isStats && <PokemonAbout pokeDatos={pokeDatos}/>}
    {isStats &&<PokemonStats stast={stastPokemon}/>}
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
    nameCont:{
      width:"100%",
      height:90,
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      position:"absolute",
      top:-20
    },
    name:{
      fontSize:60,
      fontWeight:"bold",
      color:"#ffffff"
    },
    infoContainer:{
      width:'100%',
      height:290,
      // borderWidth:0,
      // borderColor: '#000',
      // borderStyle:"solid",
      // position:"relative",
      
      paddingTop:12,
      
      
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
  img2:{
    width:360,
    height:360,
    opacity:.25,
    position:"absolute",
    top:84,
    right:30
  }
  
});