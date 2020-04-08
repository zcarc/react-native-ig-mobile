import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../screens/Auth/SignUp";
import Confirm from "../screens/Auth/Confirm";
import Login from "../screens/Auth/Login";
import AuthHome from "../screens/Auth/AuthHome";


const AuthNavigation = createStackNavigator();

export default () => (
  <NavigationContainer>
    <AuthNavigation.Navigator initialRouteName="AuthHome" headerMode="none">
      <AuthNavigation.Screen name="Signup" component={SignUp} />
      <AuthNavigation.Screen name="Confirm" component={Confirm} />
      <AuthNavigation.Screen name="Login" component={Login} />
      <AuthNavigation.Screen name="AuthHome" component={AuthHome} />
    </AuthNavigation.Navigator>
  </NavigationContainer>
);