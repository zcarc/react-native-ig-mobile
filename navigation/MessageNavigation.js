import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Messages from "../screens/Message/Messages";
import Message from "../screens/Message/Message";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Messages" component={Messages} />
    <Stack.Screen name="Message" component={Message} />
  </Stack.Navigator>
);