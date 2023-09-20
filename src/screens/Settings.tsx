import { Button, Text, View } from "react-native";

const Settings = (Props:any):JSX.Element => {
      const { navigation } = Props
  
      const goToPage = (pageName:string)=>{
            console.log('jols')
        navigation.navigate(pageName)
      }

return(         
<>              
     <View>
      <Text>esteo es desde Settings</Text>
      <Text>esteo es desde Settings</Text>
      <Text>esteo es desde Settings</Text>
      <Text>esteo es desde Settings</Text>
      <Text>esteo es desde Settings</Text>
      <Text>esteo es desde Settings</Text>
      <Text>esteo es desde Settings</Text>
      <Text>esteo es desde Settings</Text>
      <Text>esteo es desde Settings</Text>
      <Text>esteo es desde Settings</Text>

      <Button title="go Home" onPress={()=>goToPage("Home")}/> 
      <Button title="go Prueba2" onPress={()=>goToPage("Prueba2")}/>
      <Button title="go Prueba3" onPress={()=>goToPage("Prueba3")}/> 
    
      </View>          

</>)}           

export default Settings ;