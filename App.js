// android 98702621412-8cufuguujodr5o5ls94o931q4lfc2d39.apps.googleusercontent.com
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";

import StackNavigation from "./navigation/StackNavigation";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
