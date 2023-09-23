import { Button, StyleSheet, Text, View , Image , TouchableWithoutFeedback } from 'react-native';
type Props = {
  type:string
  isStats:boolean
  setIsStats:any
}

const PokeBoton = ({ setIsStats,isStats,type}:Props):JSX.Element => {

const about = (type !='About')?true:false

return(         
<>              
    <View style={styles.main}>
      <Button  color="#000000" title={type} onPress={()=>setIsStats(about)}/>
     
      {isStats && <View style={styles.indicador}></View>}
    </View>            
</>
)}           

export default PokeBoton ;

const styles = StyleSheet.create({
  main:{
    //  backgroundColor:"#454545",
    height:40,
    position:"relative"

  },
  indicador:{
    width:40,
    backgroundColor:"#000000",
    height:5,
    position:"absolute",
    bottom:4,
    left:11,
    borderRadius:20
  }
})