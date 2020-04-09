import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavgation from "./TabNavgation";
import PhotoNavigation from "./PhotoNavigation";

const MainNavigation = createStackNavigator();

export default () => (
  <NavigationContainer>
    <MainNavigation.Navigator headerMode="none" mode="modal">
      <MainNavigation.Screen name="TabNavgation" component={TabNavgation} />
      <MainNavigation.Screen
        name="PhotoNavigation"
        component={PhotoNavigation}
      />
    </MainNavigation.Navigator>
  </NavigationContainer>
);
