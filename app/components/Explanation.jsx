import React from "react";
import { View, StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import colors from "../utility/colors";
import Text from "./Text";
import { ThemedCardView, ThemedText, ThemedView } from "../themedComponents/ThemedText";

const Explanation = ({ isCorrect, explanation }) => {
  return (
    <ThemedCardView style={styles.container}>
      <ThemedText
        style={[
          styles.resultText,
          isCorrect && { color: colors.primary },
          !isCorrect && { color: colors.danger },
        ]}
      >
        {isCorrect ? "Correct" : ""}
        {!isCorrect ? "Incorrect" : ""}
      </ThemedText>
      <ThemedText style={styles.explainText}>{explanation}</ThemedText>
    </ThemedCardView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: moderateScale(18),
    paddingHorizontal: 4,
    paddingVertical: moderateScale(8),
    borderRadius: moderateScale(12),
  },
  resultText: {
    textAlign: "left",
    fontWeight: "bold",
  },
});

export default Explanation;
