import 'react-native-gesture-handler';
import Navigation from './Navigation';
import { AuthProvider } from './hooks/useAuth';
import { OverlayPopupProvider } from './hooks/useOverlayPopup'

const App = () => {

  return (
    <AuthProvider>
      <OverlayPopupProvider>
        <Navigation />
      </OverlayPopupProvider>
    </AuthProvider>
  )
};

export default App;

