import React from "react";
import { StyleSheet } from "react-native";

import AppButton from "./AppButton";
import colors from "../utility/colors";

const CheckQuizButton = ({
  isCorrect,
  isValidatedOption,
  handleNextQeustion,
  handleOptionValidation,
  selectedOptions,
}) => {
  return (
    <AppButton
      onPress={isValidatedOption ? handleNextQeustion : handleOptionValidation}
      title={isValidatedOption ? "Next" : "Check"}
      style={[
        styles.button,
        !selectedOptions.length && styles.disableButton,
        isCorrect && isValidatedOption && { backgroundColor: colors.primary },
        !isCorrect && isValidatedOption && { backgroundColor: colors.danger },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 28,
    marginVertical: 6,
    borderRadius: 12,
    borderColor: colors.gray1,
    width: "100%",
    paddingHorizontal: 14,
  },
  disableButton: {
    backgroundColor: colors.gray3,
    borderWidth: 0.5,
    paddingHorizontal: 10,
  },
});

export default CheckQuizButton;
