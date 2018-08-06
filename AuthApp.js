import { createStackNavigator } from "react-navigation";
import SignUp from "./screens/auth/SignUp";
import SignIn from "./screens/auth/SignIn";
import Reset from "./screens/auth/Reset";
import Enter from "./screens/auth/Enter";
import Renew from "./screens/auth/Renew";

export default createStackNavigator(
    {
      SignIn: { screen: SignIn },
      SignUp: { screen: SignUp },
      Reset: { screen: Reset },
      Enter: { screen: Enter },
      Renew: { screen: Renew },
    },
    { 
      initialRouteName: 'SignIn',
      headerMode: 'none'
    }  
  );