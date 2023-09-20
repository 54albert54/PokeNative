import { createStackNavigator } from '@react-navigation/stack';
import Account from '../../screens/Account';
import Prueba from '../../screens/Pokemon';
import Pokedex from '../../screens/Pokedes';
import Favorite from '../../screens/Favorite';
import { vista1 } from '../../utils/const';

const Stack = createStackNavigator();

function FavoritoNavegation() {
  return (
      <Stack.Navigator>
      <Stack.Screen name="Favorite" component={Favorite}  options={vista1}/>
      <Stack.Screen name="Prueba2" component={Prueba} />
    </Stack.Navigator>
  );
}
export default FavoritoNavegation