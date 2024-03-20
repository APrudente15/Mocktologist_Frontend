import 'react-native-gesture-handler';
import Navigation from './Navigation';
import { AuthProvider } from './hooks/useAuth';

const App = () => {

  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  )
};

export default App;

