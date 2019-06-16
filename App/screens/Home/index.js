import { createStackNavigator } from 'react-navigation';
import About from './About';
import Menu from './Menu';
import Meter from './Meter';
import Settings from './Settings';
import Find from './Find';

export default createStackNavigator(
  {
    About: {
      screen: About,
      navigationOptions: {
        header: null,
      },
    },
    Find: {
      screen: Find,
      navigationOptions: {
        header: null,
      },
    },
    Menu: {
      screen: Menu,
      navigationOptions: {
        header: null,
      },
    },
    Meter: {
      screen: Meter,
      navigationOptions: {
        header: null,
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Menu',
  },
);
