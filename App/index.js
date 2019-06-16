import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthStack from './screens/Auth';
import HomeStack from './screens/Home';

export default createAppContainer(createSwitchNavigator(
  {
    Auth: createAppContainer(AuthStack),
    Home: createAppContainer(HomeStack),
  },
  {
    initialRouteName: 'Auth',
  },
));
