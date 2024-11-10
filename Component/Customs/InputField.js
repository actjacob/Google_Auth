import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";

export default function InputField({
  label,
  icon,
  value,
  onChangeText,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction
}) {
  return (
    <View style={styles.inputContainer}>
      {icon}
      <TextInput
        placeholder={label}
        keyboardType={keyboardType}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={inputType === "password"}
      />
      {fieldButtonLabel && (
        <TouchableOpacity onPress={fieldButtonFunction}>
          <Text style={styles.fieldButtonText}>{fieldButtonLabel}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
    alignItems: "center"
  },
  input: {
    flex: 1,
    paddingVertical: 0
  },
  fieldButtonText: {
    color: "#F2BC00",
    fontWeight: "700"
  }
});
