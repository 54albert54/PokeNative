import React from 'react';

import {ViewBase, StyleSheet, Text, View ,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LogingPages from '../componentes/authComponen/LogingPages';
import UserData from '../componentes/authComponen/UserData';
import useAuth from '../hooks/useAuth';


const Account = ():JSX.Element => {
  
  const { auth }= useAuth()

 

return(         
<>              
    <View>
      {auth?<UserData/>:<LogingPages/>}
    </View>            
</>)}           

export default Account ;