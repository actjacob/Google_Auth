import * as React from "react";
import { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import InputField from "../Customs/InputField";
import AuthCustomButton from "../Customs/AuthCustomButton";

WebBrowser.maybeCompleteAuthSession();

const LoginPage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "98702621412-8cufuguujodr5o5ls94o931q4lfc2d39.apps.googleusercontent.com"
  });

  async function handleSingInWithGoogle() {
    const user = await AsyncStorage.getItem("@user");
    if (!user) {
      await getUserInfo();
    } else {
      setUserInfo(JSON.parse(user));
    }
  }

  // useLayoutEffect(() => {
  //   if (response?.type === "success") {
  //     const { id_token } = response.params;
  //     // Assuming you want to store the id_token and fetch user info with it
  //     AsyncStorage.setItem("googleToken", id_token);
  //     fetchUserInfo(id_token); // Fetch user information using token
  //   }
  // }, [response]);

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const userInfoResponse = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      const user = await userInfoResponse.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user); // Store user info
      console.log(user);
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error fetching Google user info:", error);
    }
  };

  const login = async () => {
    const loginModel = {
      email,
      password
    };
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={styles.innerContainer}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30
          }}>
          Login
        </Text>

        <InputField
          label={"Email ID"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <InputField
          label={"Password"}
          icon={
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => navigation.navigate("EmailScreen")}
        />

        <AuthCustomButton label={"Login"} onPress={login} response={response} />

        <Text style={{ textAlign: "center", color: "#666", marginBottom: 30 }}>
          Or, login with ...
        </Text>

        <View
          style={{
            flexDirection: "1",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 30
          }}>
          <TouchableOpacity
            onPress={() => {
              promptAsync();
              console.log("Google button pressed");
            }}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              padding: 10,
              width: 60,
              height: 60,
              alignItems: "center",
              justifyContent: "center"
            }}>
            <Image
              source={require("../../assets/images/Google_Icons.webp")}
              style={{ width: 50, height: 50 }}
            />
          </TouchableOpacity>

          <View style={styles.registerTextContainer}>
            <Text>New to the app?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={{ color: "#F2BC00", fontWeight: "700" }}>
                {" "}
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
  mediaIcons: {
    alignItems: "center",
    marginBottom: 40
  },
  icons: {
    height: 300,
    width: 300,
    transform: [{ rotate: "-5deg" }]
  },
  registerTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
    marginTop: 30
  }
});

export default LoginPage;
