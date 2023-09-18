import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Settings from '../../screens/Settings';
import Home from '../../screens/Home';
import Account from '../../screens/Account';
import Favorite from '../../screens/Favorite';
import Pokedex from '../../screens/Pokedes';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Home" component={Home} options={
        {
          tabBarIcon:({color,size})=><Icon name="home" color={color} size={size}/>
        }
      }/>
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Favorite" component={Favorite} options={{
      tabBarIcon:({color,size})=><Icon name="user" color={color} size={size}/>
      }}/> 
      <Tab.Screen name="Pokedex" component={Pokedex} options={{
       tabBarLabel:"" ,
       tabBarIcon:()=>RenderPokeBall()
       
      }}/>
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default MyTabs

const RenderPokeBall = ()=> {

return(   
  <Image source={require('../../assets/Poké_Ball_icon')}/>   
)}           

