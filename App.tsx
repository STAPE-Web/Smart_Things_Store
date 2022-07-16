import AppLoading from 'expo-app-loading';
import { useFonts, Inter_500Medium, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import Navigator from './Navigate';
import { store } from './store';
import { Provider } from 'react-redux';


export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_500Medium, Inter_400Regular, Inter_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
};