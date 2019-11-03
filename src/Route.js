import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import GLOBAL from './components/Utils/Globals';
import Login from './components/Login/Login';
import Catlog from './components/Catlog/Catlog.js';
import Cart from './components/Cart/Cart';
import Credits from './components/Credits/Credits';
import Stripe from './components/StripeAndFont/Stripe';
import FeaturesListScreen from './components/OtherFeatures/FeaturesListScreen';
import Fonts from './components/OtherFeatures/Fonts';
import WebView from './components/OtherFeatures/WebView';
const BottomNavigation = createBottomTabNavigator(
  {
    Catlog: {
      screen: Catlog,
    },
    Cart: {screen: Cart},
    Credits: {screen: Credits},

    Features: {screen: FeaturesListScreen},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName = 'apps';
        if (routeName === GLOBAL.PAGE.CATLOG) {
          iconName = 'home';
        } else if (routeName === GLOBAL.PAGE.CART) {
          iconName = 'cart';
        } else if (routeName === GLOBAL.PAGE.CREDITS) {
          iconName = 'bank';
        } else if (routeName === GLOBAL.PAGE.STRIPE) {
          iconName = 'card';
        }
        return <MIcon name={iconName} size={20} color={tintColor} />;
      },
    }),
    initialRouteName: 'Catlog',
    tabBarOptions: {
      activeTintColor: 'black',
    },
  },
);
BottomNavigation.navigationOptions;
const loginNavigation = createStackNavigator(
  {
    Login: {screen: Login},
    Fonts: {screen: Fonts},
    Stripe: {
      screen: Stripe,
    },
    WebView: {screen: WebView},
    BottomNavigation,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  },
);

const InitialNav = createAppContainer(loginNavigation);

export default InitialNav;
