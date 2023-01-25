import {NavigationContainer} from '@react-navigation/native';
import {Main} from './src/screens/Main';
import {MenuProvider} from '@context';

export default function App() {
  return (
    <NavigationContainer>
      <MenuProvider>
        <Main></Main>
      </MenuProvider>
    </NavigationContainer>
  );
}
