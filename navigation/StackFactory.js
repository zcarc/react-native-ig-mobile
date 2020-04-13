import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import MessagesLink from "../components/MessagesLink";
import NavIcon from "../components/NavIcon";
import { stackStyles } from "./config";
const Stack = createStackNavigator();

export default ({ route }) => {
  const {
    name,
    params: { initialRoute, headerTitle },
  } = route;
  console.log('route: ', route);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={name}
        component={initialRoute}
        options={{
          headerRight: () => <MessagesLink />,
          headerTitle: () => headerTitle ? headerTitle : <NavIcon name="logo-instagram" size={36} />,
          headerStyle: { ...stackStyles },
        }}
      />
    </Stack.Navigator>
  );
};
