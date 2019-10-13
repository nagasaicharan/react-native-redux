import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import Login from "./components/Login/Login";
import Catlog from "./components/Catlog/Catlog.js";
import Cart from "./components/Cart/Cart";
import Credits from "./components/Credits/Credits";

const BottomNavigation = createBottomTabNavigator(
  {
    Catlog: { screen: Catlog },
    Cart: { screen: Cart },
    Credits: { screen: Credits }
  },
  {
    swipeEnabled: true,
    initialRouteName: "Catlog",
    tabBarOptions: {
      showIcon: false
    },
    lazy: true
  }
);
const loginNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    BottomNavigation
  },
  {
    headerMode: "none",
    initialRouteName: "Login"
  }
);

const InitialNav = createAppContainer(loginNavigation);

export default InitialNav;
