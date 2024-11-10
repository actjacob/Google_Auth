import { Text, TouchableOpacity,ActivityIndicator,StyleSheet} from "react-native";
import React from "react";

export default function AuthCustomButton({ label, onPress,response = false}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={response}
      style={{
        backgroundColor: "#F2BC00",
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
      }}
    >
      {
        response ? ( <ActivityIndicator size="small" color="#0000ff" />) : ( <Text
          style={styles.activityIndicator}
        >
          {label}
        </Text>)
      }
     
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  activityIndicator: {
    textAlign: "center", // Hatalı: `textAlign` ve `fontWeight`, `fontSize` genellikle metin bileşenleri içindir.
    fontWeight: "700",
    fontSize: 16,
    color: "#fff",
  }
});
