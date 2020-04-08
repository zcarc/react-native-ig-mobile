import * as React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";

const TabNavigation = createBottomTabNavigator();

export default () => (
  <NavigationContainer>
    <TabNavigation.Navigator initialRouteName="AuthHome" headerMode="none">
      <TabNavigation.Screen name="Home" component={Home} />
      <TabNavigation.Screen name="Search" component={Search} />
      <TabNavigation.Screen
        name="Add"
        component={View}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            console.log("Add");
          },
        }}
      />
      <TabNavigation.Screen name="Notifications" component={Notifications} />
      <TabNavigation.Screen name="Profile" component={Profile} />
    </TabNavigation.Navigator>
  </NavigationContainer>
);
