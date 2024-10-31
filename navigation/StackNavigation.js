import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../Component/Screens/LoginPage";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Naviagtor>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}></Stack.Screen>
      </Stack.Naviagtor>
    </NavigationContainer>
  );
};

export default StackNavigation;
