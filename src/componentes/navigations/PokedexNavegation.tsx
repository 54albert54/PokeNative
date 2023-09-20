import { createStackNavigator } from '@react-navigation/stack';
import Account from '../../screens/Account';
import Prueba from '../../screens/Pokemon';
import Pokedex from '../../screens/Pokedes';
import Pokemon from '../../screens/Pokemon';
import { vista1 } from '../../utils/const';
import PokemonView from '../../screens/PokemonView';

const Stack = createStackNavigator();

function PokedexNavegation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokedex" component={Pokedex} options={vista1}/>
      <Stack.Screen name="Pokemon" component={Pokemon} options={vista1} />
      <Stack.Screen name="PokemonView" component={PokemonView}  />

    </Stack.Navigator>
  );
}
export default PokedexNavegation