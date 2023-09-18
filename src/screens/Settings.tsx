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
    
      </View>          

</>)}           

export default Settings ;