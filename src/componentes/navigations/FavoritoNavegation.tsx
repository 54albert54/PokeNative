import { createStackNavigator } from '@react-navigation/stack';
import Prueba from '../../screens/Pokemon';
import Favorite from '../../screens/Favorite';
import { vista1 } from '../../util/const';
import Pokemon from '../../screens/Pokemon';

const Stack = createStackNavigator();

function FavoritoNavegation() {
  return (
      <Stack.Navigator>
      <Stack.Screen name="favoritos" component={Favorite}  options={vista1}/>
      <Stack.Screen name="Pokemon" component={Pokemon} options={vista1} />
     </Stack.Navigator>
     
  );
}
export default FavoritoNavegation