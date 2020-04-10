import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity } from "react-native";
import MessagesLink from "../components/MessagesLink";
const Stack = createStackNavigator();

export default ({ route }) => {
  const {
    name,
    params: { initialRoute },
  } = route;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={name}
        component={initialRoute}
        options={{
          headerRight: () => <MessagesLink/>,
        }}
      />
    </Stack.Navigator>
  );
};
