import { createStackNavigator } from '@react-navigation/stack';
import Account from '../../screens/Account';
import Prueba from '../../screens/Pokemon';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { vista1 } from '../../utils/const';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function AccountNavegation() {
  return (
    <Stack.Navigator>
      <Tab.Screen name="Accunt" component={Account} options={vista1} />
      <Stack.Screen name="Prueba2" component={Prueba} />
    </Stack.Navigator>
  );
}
export default AccountNavegation