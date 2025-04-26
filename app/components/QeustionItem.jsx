import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const QuestionItem = ({ item, selectedQuestion, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[
        styles.item,
        selectedQuestion?.id === item?.id && styles.activeItem,
        item.matched && styles.inActiveItem,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, item.matched && { color: "gray" }]}>
        {item.text}
      </Text>
    </TouchableOpacity>
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
    backgroundColor: "white",
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
