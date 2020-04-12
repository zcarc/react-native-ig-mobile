import * as React from "react";
import { View, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import StackFactory from "./StackFactory";
import NavIcon from "../components/NavIcon";

const TabNavigation = createBottomTabNavigator();


export default () => (
  <TabNavigation.Navigator tabBarOptions={{showLabel: false}}>
    <TabNavigation.Screen
      name={"Home"}
      component={StackFactory}
      initialParams={{ initialRoute: Home }}
      options={{tabBarIcon: () => <NavIcon name={Platform.OS === "ios" ? "ios-home" : "md-home"}/>}}
    />
    <TabNavigation.Screen
      name="Search"
      component={StackFactory}
      initialParams={{ initialRoute: Search }}
      options={{tabBarIcon: () => <NavIcon name={Platform.OS === "ios" ? "ios-search" : "md-search"}/>}}
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
      options={{tabBarIcon: () => <NavIcon name={Platform.OS === "ios" ? "ios-add" : "md-add"}/>}}
    />
    <TabNavigation.Screen
      name="Notifications"
      component={StackFactory}
      initialParams={{ initialRoute: Notifications }}
      options={{tabBarIcon: () => <NavIcon name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}/>}}
    />
    <TabNavigation.Screen
      name="Profile"
      component={StackFactory}
      initialParams={{ initialRoute: Profile }}
      options={{tabBarIcon: () => <NavIcon name={Platform.OS === "ios" ? "ios-person" : "md-person"}/>}}
    />
  </TabNavigation.Navigator>
);
