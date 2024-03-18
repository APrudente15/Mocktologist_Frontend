import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Pressable, Text } from 'react-native';
import Landing from './pages/landing.js';
import Dash from './pages/dash.js';
import Leaderboard from './pages/leaderboard.js';
import Steps from './pages/steps.js';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Landing">
        <Drawer.Screen name="Landing" component={Landing} />
        <Drawer.Screen name="Dash" component={Dash} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};



export default App;
