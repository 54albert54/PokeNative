import { StyleSheet, Text, View,FlatList } from 'react-native';
import { Stat } from '../../utils/const';

type Props={
  stast:Stat[]
}
const PokemonStats = ({stast}:Props):JSX.Element => {
  const Datps = stast
  const dinamicBar = (sta:number) => {
    let num = sta
    if (num>100){
      num = 100
    }
    const dinamic ={
      width:`${num}%`,
    backgroundColor:(num>49)?"#12ff40":"#ff3028",
    }
    const style = {...dinamic,...styles.frontBar}
    return style
  }
  
return(               
<View >
  
      {Datps.map((item) => (
        <View style={styles.mainCotainer}>
          <View style={styles.stastCotainer}>
          <Text style={styles.stastName} >{item.stat.name}</Text>
          <Text style={styles.stastBase} >{item.base_stat}</Text>
          </View>
          <View style={styles.stastBar}>
            <View style={dinamicBar(item.base_stat)} ></View>
            <View style={styles.baseBar}></View>
          </View>
        </View>
      ))}
    </View>
)}           

export default PokemonStats ;

const styles = StyleSheet.create({
  mainCotainer:{
    display:"flex",
    flexDirection:"row",
  },
  stastCotainer:{
    display:"flex",
    flexDirection:"row",
    margin:10
    
  },
  stastName:{
    fontSize:14,
    fontWeight:"bold",
    width:120
  },
  stastBase:{
    width:36,
    fontWeight:"300"
  },
  stastBar:{
    width:250,
    height:30,
    display:"flex",
    padding:20,
    justifyContent:"center",
    overflow:"hidden"
  },
  frontBar:{
    height:12,
    borderRadius:20,
    position:"absolute",
    zIndex:2
  },
  baseBar:{
    width:'100%',
    backgroundColor:"#00000050",
    height:12,
    borderRadius:20,
    position:"absolute"
  }

})