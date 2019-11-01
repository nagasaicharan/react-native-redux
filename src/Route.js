import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Login from './components/Login/Login';
import Catlog from './components/Catlog/Catlog.js';
import Cart from './components/Cart/Cart';
import Credits from './components/Credits/Credits';
import Stripe from './components/StripeAndFont/Stripe';

const BottomNavigation = createBottomTabNavigator(
  {
    Catlog: {screen: Catlog},
    Cart: {screen: Cart},
    Credits: {screen: Credits},
    Stripe: {
      screen: Stripe,
    },
  },
  {
    initialRouteName: 'Catlog',
  },
);
const loginNavigation = createStackNavigator(
  {
    Login: {screen: Login},
    BottomNavigation,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  },
);

const InitialNav = createAppContainer(loginNavigation);

export default InitialNav;
