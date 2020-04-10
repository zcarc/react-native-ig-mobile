import * as React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import StackFactory from "./StackFactory";

const TabNavigation = createBottomTabNavigator();


export default () => (
  <TabNavigation.Navigator>
    <TabNavigation.Screen
      name="Home"
      component={StackFactory}
      initialParams={{ initialRoute: Home }}
    />
    <TabNavigation.Screen
      name="Search"
      component={StackFactory}
      initialParams={{ initialRoute: Search }}
    />
    <TabNavigation.Screen
      name="Add"
      component={View}
      listeners={({ navigation, route }) => ({
        tabPress: (e) => {
          e.preventDefault();
          navigation.navigate("PhotoNavigation");
        },
      })}
    />
    <TabNavigation.Screen
      name="Notifications"
      component={StackFactory}
      initialParams={{ initialRoute: Notifications }}
    />
    <TabNavigation.Screen
      name="Profile"
      component={StackFactory}
      initialParams={{ initialRoute: Profile }}
    />
  </TabNavigation.Navigator>
);
