import React from 'react';
import { Image,Text ,View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Settings from '../../screens/Settings';
import Home from '../../screens/Home';

import Favorite from '../../screens/Favorite';

import AccountNavegation from './AccountNavegation';

import PokedexNavegation from './PokedexNavegation';
import FavoritoNavegation from './FavoritoNavegation';
import SettingNavegation from './SettingNavegation';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Group> 

      </Tab.Group>
      <Tab.Screen name="Home" component={Home} options={
        {
          tabBarIcon:({color,size})=><Icon name="home" color={color} size={size}/>
        }
      }/>
      <Tab.Screen name="Account" component={AccountNavegation} options={{
       
        tabBarIcon:({color,size})=><Icon name="user" color={color} size={size}/>
      }} />
      <Tab.Screen name="Pokedex" component={PokedexNavegation} options={{
       tabBarLabel:"" ,
       
       
        tabBarIcon:()=>RenderPokeBall()
       
      }}/>
      <Tab.Screen name="Favorite" component={FavoritoNavegation} options={{
        
      tabBarIcon:({color,size})=><Icon name="star" color={color} size={size}/>
      }}/> 
      <Tab.Screen name="Settings" component={SettingNavegation} options={{
        tabBarIcon:({color,size})=><Icon name="slack" color={color} size={size}/>
      }}/>
    </Tab.Navigator>
  );
}

  export default MyTabs

const RenderPokeBall = ()=> {

return(   
 

  
  <Image 
  style={{
    width:75,
    height:75,
    top:3
  }}
  source={require('../../screens/assets/Ball.png')}/>
 
  
 
)}           

