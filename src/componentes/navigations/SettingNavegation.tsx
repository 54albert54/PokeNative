import { createStackNavigator } from '@react-navigation/stack';
import Account from '../../screens/Account';
import Prueba from '../../screens/Pokemon';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { vista1 } from '../../util/const';
import  Settings  from '../../screens/Settings';
import Prueba3 from '../../screens/Pruebas';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function SettingNavegation() {
  return (
    <Stack.Navigator>
      <Tab.Screen name="Setting" component={Settings} options={vista1} />
      <Stack.Screen name="Prueba2" component={Prueba} />
      <Stack.Screen name="Prueba3" component={Prueba3} />
    </Stack.Navigator>
  );
}
export default SettingNavegation