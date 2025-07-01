import React from "react";
import { Text, StyleSheet } from "react-native";
import { ThemedText } from "../themedComponents/ThemedText";

const AppText = ({ children, style }) => {
  return <ThemedText style={[styles.text, style]}>{children}</ThemedText>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});

export default AppText;
