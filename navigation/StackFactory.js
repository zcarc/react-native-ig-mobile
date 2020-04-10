import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity } from "react-native";
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
          headerRight: () => (
            <TouchableOpacity>
              <Text>{name}</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
