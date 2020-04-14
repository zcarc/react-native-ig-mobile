import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import MessagesLink from "../components/MessagesLink";
import NavIcon from "../components/NavIcon";
import Detail from "../screens/Detail";
import { stackStyles } from "./config";
import styles from "../styles";
import UserDetail from "../screens/UserDetail";

const Stack = createStackNavigator();

export default ({ route }) => {
  const {
    name,
    params: { initialRoute, customConfig },
  } = route;
  console.log("route: ", route);
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: styles.blackColor,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name={name}
        component={initialRoute}
        options={{
          ...customConfig,
          headerStyle: { ...stackStyles },
        }}
      />
      <Stack.Screen
        name={"Detail"}
        component={Detail}
        options={{
          headerTitle: "Photo",
        }}
      />
      <Stack.Screen
        name={"UserDetail"}
        component={UserDetail}
        options={{
          headerTitle: "User",
        }}
      />
    </Stack.Navigator>
  );
};
