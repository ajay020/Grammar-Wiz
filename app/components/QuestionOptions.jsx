import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../utility/colors";
import { ScrollView } from "react-native-gesture-handler";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { ThemedText, ThemedTouchableOpacity } from "../themedComponents/ThemedText";

const QuestionOptions = ({ question, selectedOptions, handleOptionSelect }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ThemedText style={styles.questionTxt}>{question?.text}</ThemedText>
        <View style={styles.optionContainer}>
          {question?.options?.map((option) => (
            <ThemedTouchableOpacity
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
              <ThemedText style={[styles.optionTxt]}>{option.text}</ThemedText>
            </ThemedTouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "gray",
    // gap: 20,
  },
  questionTxt: {
    fontSize: moderateScale(17, 0.5),
    marginVertical: verticalScale(14),
    marginBottom: verticalScale(16),
    lineHeight: moderateScale(24, 0.5),
    fontWeight: "bold",
    textAlign: "left",
  },
  optionContainer: {
    // backgroundColor: "teal",
    gap: verticalScale(14),
  },
  option: {
    borderWidth: 0.5,
    borderBottomWidth: moderateScale(2, 0.2),
    borderColor: colors.black,
    borderRadius: 10,
    // backgroundColor: "pink",
    padding: moderateScale(10, 0.5),
  },
  optionTxt: {
    fontSize: moderateScale(16, 0.5),
    lineHeight: moderateScale(24, 0.2),
    // textAlign: "center",
  },
});

export default QuestionOptions;
