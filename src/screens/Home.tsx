import { Button, Text, View } from "react-native";

const Home = (Props:any):JSX.Element => {
  const { navigation } = Props
  
  const goToPage = (pageName:string)=>{
    console.log('jols')
navigation.navigate(pageName)
}
return(         
<>              
     <View>
      <Text>esteo es desde home</Text>
      <Text>esteo es desde home</Text>
      <Text>esteo es desde home</Text>
      <Text>esteo es desde home</Text>
      <Text>esteo es desde home</Text>
      <Text>esteo es desde home</Text>
      <Text>esteo es desde home</Text>
      <Text>esteo es desde home</Text>
      <Text>esteo es desde home</Text>
      <Text>esteo es desde home</Text>
      <Text>esteo es desde home</Text>
      <Text>esteo es desde home</Text>
      <Text>esteo es desde home</Text>
      </View>        
      <Button title="go Settings" onPress={()=>goToPage('Settings')}/>  
</>)}           

export default Home ;