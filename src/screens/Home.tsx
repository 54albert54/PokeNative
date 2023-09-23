import { Button, Text, View ,StyleSheet ,Image} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
const Home = (Props:any):JSX.Element => {
  const { navigation } = Props
  
  const goToPage = (pageName:string)=>{
    // console.log('os',Platform.OS)
navigation.navigate(pageName)
}
return(         
<View >      
<LinearGradient
     // colors={['rgba(f,f,0,0.8)', 'transparent']}
        colors={['#FF5500cd', '#fff']}
        style={style.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >    
    <View style={style.heder}>
      <Text style={style.title}>Pokedéx hecha en React Native</Text>
    </View>     
    <View style={style.heder}>
      <Image style={style.image} source={require('../screens/assets/Ball.png')}/>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium tempora suscipit illo, nemo impedit ipsa laudantium maxime quae ex non et provident officiis pariatur repellat at voluptates adipisci ut.
      </Text>
    </View>  
      <Button title="go Settings" onPress={()=>goToPage('Settings')}/>  
      </LinearGradient>    
</View>
)}           

export default Home ;

const style = StyleSheet.create({
  main:{

  },
  gradient: {
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  heder:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    
  },
  title:{
    paddingTop:40,
    fontSize:28,
    marginBottom:20,
    fontWeight:"400"
  },
  image:{
    width:300,
    height:300
  }

})