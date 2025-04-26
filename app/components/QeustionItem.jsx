import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { ThemedText, ThemedTouchableOpacity } from "../themedComponents/ThemedText";

const QuestionItem = ({ item, selectedQuestion, onPress, disabled }) => {
  return (
    <ThemedTouchableOpacity
      style={[
        styles.item,
        selectedQuestion?.id === item?.id && styles.activeItem,
        item.matched && styles.inActiveItem,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <ThemedText style={[styles.text, item.matched && { color: "gray" }]}>
        {item.text}
      </ThemedText>
    </ThemedTouchableOpacity>
  );
};

export default QuestionItem;

const styles = StyleSheet.create({
  inActiveItem: {
    backgroundColor: "lightgray",
  },
  column: {
    flex: 1,
    alignItems: "center",
    gap: 12,
    // margin: 10,
    // backgroundColor: "green",
  },
  activeItem: {
    // backgroundColor: "dodgerblue",
    borderWidth: 2,
    borderColor: "dodgerblue",
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    padding: 20,
    margin: 5,
    borderWidth: 1,
    minWidth: 120,
    minHeight: 80,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
  },
});
