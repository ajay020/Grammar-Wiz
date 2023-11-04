import React from "react";
import { View, StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import colors from "../utility/colors";
import Text from "./Text";

const Explanation = ({ isCorrect, explanation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.resultText,
          isCorrect && { color: colors.primary },
          !isCorrect && { color: colors.danger },
        ]}
      >
        {isCorrect ? "Correct" : ""}
        {!isCorrect ? "Incorrect" : ""}
      </Text>
      <Text style={styles.explainText}>{explanation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
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
