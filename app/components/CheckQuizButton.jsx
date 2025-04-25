import { StyleSheet } from "react-native";

import AppButton from "./AppButton";
import colors from "../utility/colors";

const CheckQuizButton = ({
  onPress,
  isCorrect,
  isSelected,
  isValidatedOption,
}) => {
  return (
    <AppButton
      onPress={onPress}
      disabled={!isSelected}
      title={isValidatedOption ? "Next" : "Check"}
      style={[
        styles.button,
        !isSelected && styles.disableButton,
        isCorrect && isValidatedOption && { backgroundColor: colors.primary },
        !isCorrect && isValidatedOption && { backgroundColor: colors.danger },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 28,
    borderRadius: 10,
    borderColor: colors.gray1,
    width: "100%",
    paddingHorizontal: 8,
  },
  disableButton: {
    backgroundColor: colors.gray3,
    borderWidth: 0.5,
    paddingHorizontal: 0,
  },
});

export default CheckQuizButton;
