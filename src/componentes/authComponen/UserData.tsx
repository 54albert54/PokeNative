import { Button, Text, View ,StyleSheet ,Image , TouchableWithoutFeedback} from 'react-native';
import useAuth from '../../hooks/useAuth';
import { TUserDectail, USER_DECTAIL } from '../../util/const';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { getPokemonLocalStorage } from '../../util/api';

const UserData = ():JSX.Element => {
  const { auth , logOut  } = useAuth()
  const [favoritos , setFavoritos] = useState([])
  const navigation = useNavigation();
  const data = USER_DECTAIL as TUserDectail;

  useFocusEffect(
    useCallback(()=>{
      (async ()=>{
        const pokemonSaved = await getPokemonLocalStorage()
        setFavoritos(pokemonSaved)
      })();
      },[])
  )
 

  const goToPage = (pageName:string)=>{
    navigation.navigate(pageName)
   
}

return(
<View style={styles.mainContain}> 
  <View>

  <Text style={styles.title}>Wellcome,</Text>
  <Text style={styles.title} > {data.name }</Text>
  </View>

  <Image style={styles.userImg} source={require("../../screens/assets/Red.png")}/>
  <View style={styles.infoContainer}>
  {/* aqui son las cartas dinamicas */}
  <TouchableWithoutFeedback onPress={()=>goToPage("favorite")}>
      <View style={styles.infoCards} > 
        <Text>Favoritos : {favoritos?.length} </Text>
      </View>
  </TouchableWithoutFeedback>
  </View>
  <View style={styles.userDataContainer}>
  <List  data={"nickname"} detail={data.username}/>
  <List  data={"name"} detail={data.name}/>
  <List  data={"last Name"} detail={data.lastname}/>
  <List  data={"email"} detail={data.email}/>
  </View>
    <Button title='logOut' onPress={()=>logOut()}/>
</View>

)}

export default UserData ;

const List = ({data, detail}:any):JSX.Element => {

return(
<View style={styles.userData} > 
  <Text style={styles.userDataTitle}>{data}</Text>
  <Text>{detail}</Text>
</View>
)}


const styles = StyleSheet.create({
  mainContain:{
    display:"flex",
    alignItems:"center",
  },
  infoContainer:{
    width:"100%",
    height:200,
    display:"flex",
    justifyContent:"center",
    flexDirection:"row",
    alignItems:"center",
    columnGap:20
  },
  infoCards:{
    backgroundColor:'#ebffff60',
    width:120,
    height:110,
    display:"flex",
    
    justifyContent:"center",
    alignItems:"center",
    borderRadius:12,
    shadowColor:"#000",
    shadowOffset:{width:2,height:2},
    shadowOpacity: 0.8,
    shadowRadius: 4,
    },
  title:{
    fontSize:36,
    fontWeight:"bold"
  },
  userImg:{
    width:80,
    height:130
  },
  userDataContainer:{
    borderColor:"#000",
    borderWidth:1,
    borderRadius:16,
    padding:20
  },
  userData:{
    marginBottom:10,
    backgroundColor:'#ebffff60',
    borderBottomColor:"#000",
    borderBottonWidth:1
  },
  userDataTitle:{
    fontWeight:"bold"
  }
})