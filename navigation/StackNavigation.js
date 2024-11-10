import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../Component/Screens/LoginPage";
import Home from "../Component/Screens/Home";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}></Stack.Screen>

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigation;
