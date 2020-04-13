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
    params: { initialRoute, customConfig },
  } = route;
  console.log('route: ', route);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={name}
        component={initialRoute}
        options={{
          ...customConfig,
          headerStyle: { ...stackStyles },
        }}
      />
    </Stack.Navigator>
  );
};
