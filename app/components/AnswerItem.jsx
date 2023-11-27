import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const AnswerItem = ({ answer, selectedAnswer, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[
        styles.item,
        selectedAnswer?.id === answer?.id && styles.activeItem,
        answer.matched && styles.inActiveItem,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, answer.matched && { color: "gray" }]}>
        {answer.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 5,
    padding: 20,
    margin: 5,
    // borderWidth: 1,
    // width: 120,
    // height: 80,
  },
  activeItem: {
    // backgroundColor: "dodgerblue",
    borderWidth: 2,
    borderColor: "dodgerblue",
  },
  inActiveItem: {
    backgroundColor: "lightgray",
  },
  text: {
    fontSize: 20,
  },
});

export default AnswerItem;
