import * as React from "react";
import { View, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Tabs/Home";
import Search from "../screens/Tabs/Search";
import Notifications from "../screens/Tabs/Notifications";
import Profile from "../screens/Tabs/Profile";
import StackFactory from "./StackFactory";
import NavIcon from "../components/NavIcon";
import SearchBar from "../components/SearchBar";
import MessagesLink from "../components/MessagesLink";

const TabNavigation = createBottomTabNavigator();


export default () => (
  <TabNavigation.Navigator
    initialRouteName="Profile"
    tabBarOptions={{
      showLabel: false,
      style: { backgroundColor: "#FAFAFA" },
    }}
  >
    <TabNavigation.Screen
      name={"Home"}
      component={StackFactory}
      initialParams={{
        initialRoute: Home,
        customConfig: {
          headerRight: () => <MessagesLink />,
          headerTitle: () => <NavIcon name="logo-instagram" size={36} />,
        },
      }}
      options={{
        tabBarIcon: ({ focused }) => (
          <NavIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-home" : "md-home"}
          />
        ),
      }}
    />
    <TabNavigation.Screen
      name="Search"
      component={StackFactory}
      initialParams={{
        initialRoute: Search,
      }}
      options={{
        tabBarIcon: ({ focused }) => (
          <NavIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
          />
        ),
      }}
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
      options={{
        tabBarIcon: ({ focused }) => (
          <NavIcon
            focused={focused}
            size={28}
            name={Platform.OS === "ios" ? "ios-add" : "md-add"}
          />
        ),
      }}
    />
    <TabNavigation.Screen
      name="Notifications"
      component={StackFactory}
      initialParams={{ initialRoute: Notifications }}
      options={{
        tabBarIcon: ({ focused }) => (
          <NavIcon
            focused={focused}
            name={
              Platform.OS === "ios"
                ? focused
                  ? "ios-heart"
                  : "ios-heart-empty"
                : focused
                ? "md-heart"
                : "md-heart-empty"
            }
          />
        ),
      }}
    />
    <TabNavigation.Screen
      name="Profile"
      component={StackFactory}
      initialParams={{ initialRoute: Profile }}
      options={{
        tabBarIcon: ({ focused }) => (
          <NavIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-person" : "md-person"}
          />
        ),
      }}
    />
  </TabNavigation.Navigator>
);
