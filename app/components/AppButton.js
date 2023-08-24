import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import AppText from "./Text";
import colors from "../utility/colors";

const AppButton = ({ title = "Hello", onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <AppText style={styles.buttonText}>{title}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
  },
});

export default AppButton;
