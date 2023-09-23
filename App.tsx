import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';




import MyTabs from './src/componentes/navigations/NavigationBotonTap';
import { AuthProvider } from './src/context/Auth.context';





export default function App() {
  return (
    
    <NavigationContainer>
      <AuthProvider>
        <MyTabs/>
     </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:88
  },
  testo:{
    fontSize:16,
    fontWeight:"bold"
  },
  title:{
    fontSize:48,
    fontWeight:"bold",
    marginBottom:8
  }
});
