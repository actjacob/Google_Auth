import * as React from "react";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

const LoginPage = () => {
  const [userInfo, setUserInfo] = React.useState(null);
  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   androidClientId: "98702621412-8cufuguujodr5o5ls94o931q4lfc2d39.apps.googleusercontent.com"
  // });

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={styles.innerContainer}>
        <Text style={styles.innerText}>Login</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  innerContainer: {
    paddingHorizontal: 20
  },
  innerText: {
    fontSize: 28,
    fontWeight: "500",
    color: "#333",
    marginBottom: 3
  }
});

export default LoginPage;
