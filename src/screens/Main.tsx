import {FC} from 'react';
import {Home, Note} from '@screens';
import {MainStack} from '../routes';

const Main: FC = () => {
  return <MainStackScreen />;
};

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Note" component={Note} />
    </MainStack.Navigator>
  );
};

export {Main};
