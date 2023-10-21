import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../utility/colors";
import Text from "./Text";
import { ScrollView } from "react-native-gesture-handler";

const Quiz = ({ question, selectedOptions, handleOptionSelect, quizTitle }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.quizTitle}>{quizTitle}</Text>
        <Text style={styles.questionTxt}>{question?.text}</Text>
        <View style={styles.optionContainer}>
          {question?.options?.map((option) => (
            <TouchableOpacity
              key={option.id}
              activeOpacity={0.9}
              onPress={() => handleOptionSelect(option)}
              style={[
                styles.option,
                selectedOptions.find(
                  (selectdOp) => selectdOp?.id === option?.id
                ) && {
                  backgroundColor: colors.gray5,
                },
              ]}
            >
              <Text style={[styles.optionTxt]}>{option.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "gray",
    // height: "60%",
    // gap: 20,
    // flex: 1,
  },
  questionTxt: {
    color: colors.black,
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "500",
    textAlign: "center",
  },
  optionContainer: {
    // backgroundColor: "teal",
    gap: 20,
  },
  option: {
    borderWidth: 0.5,
    borderBottomWidth: 2,
    borderColor: colors.black,
    borderRadius: 10,
    // backgroundColor: "pink",
    padding: 14,
  },
  optionTxt: {
    color: colors.black,
    fontSize: 18,
    textAlign: "center",
  },
  quizTitle: {
    fontSize: 20,
    // textAlign: "center",
  },
});

export default Quiz;
