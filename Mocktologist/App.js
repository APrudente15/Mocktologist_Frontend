import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './pages/landing.js'
import Dash from './pages/dash.js'
import Leaderboard from './pages/leaderboard.js'
import Steps from './pages/steps.js'
import NavigationMenu from './NavigationMenu';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Dash" component={Dash} />
        <Stack.Screen name="Leaderboard" component={Leaderboard} />
        <Stack.Screen name="Steps" component={Steps} />
      </Stack.Navigator>
      <NavigationMenu />
    </NavigationContainer>
  );
}

