import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";
import { stackStyles } from "./config";
import styles from "../styles";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const PhotoTabs = () => {
    return (
      <Tab.Navigator
        tabBarPosition="bottom"
        tabBarOptions={{
          indicatorStyle: {
            backgroundColor: styles.blackColor,
          },
          labelStyle: {
            color: styles.blackColor,
            fontWeight: "600",
          },
          styles: {
            paddingBottom: 20,
            ...stackStyles,
          },
        }}
      >
        <Tab.Screen
          name="SelectPhoto"
          component={SelectPhoto}
          options={{ tabBarLabel: "Select" }}
        />
        <Tab.Screen
          name="TakePhoto"
          component={TakePhoto}
          options={{ tabBarLabel: "Take" }}
        />
      </Tab.Navigator>
    );
};

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { ...stackStyles },
    }}
  >
    <Stack.Screen
      name="PhotoTabs"
      component={PhotoTabs}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
  </Stack.Navigator>
);