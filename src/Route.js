import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./components/Login/Login";

const loginNavigation = createStackNavigator(
  {
    Login: { screen: Login }
  },
  {
    headerMode: "none",
    initialRouteName: "Login"
  }
);

const InitialNav = createAppContainer(loginNavigation);

export default InitialNav;
