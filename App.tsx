import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



import Home from './src/screens/Home';
import MyTabs from './src/componentes/navigations/NavigationBotonTap';
import AccountNavegation from './src/componentes/navigations/AccountNavegation';
import Account from './src/screens/Account';




export default function App() {
  return (
    <NavigationContainer>

<MyTabs/>
   
   
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
