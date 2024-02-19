import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "./Icon";

const CheckIcon = ({
  size = 16,
  color = "white",
  backgroundColor = "dodgerblue",
  style,
}) => {
  return (
    <View style={[styles.checkBox, { backgroundColor, ...style }]}>
      <Icon name={"check"} color={color} size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  checkBox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "dodgerblue",
  },
});

export default CheckIcon;
