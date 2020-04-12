import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import MessagesLink from "../components/MessagesLink";
import NavIcon from "../components/NavIcon";
const Stack = createStackNavigator();

export default ({ route }) => {
  const {
    name,
    params: { initialRoute },
  } = route;
  console.log('route: ', route);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={name}
        component={initialRoute}
        options={{
          headerRight: () => <MessagesLink />,
          headerTitle: () => <NavIcon name="logo-instagram" size={36} />
        }}
      />
    </Stack.Navigator>
  );
};
