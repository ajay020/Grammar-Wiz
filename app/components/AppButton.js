import { TouchableOpacity, StyleSheet } from "react-native";

import AppText from "./Text";
import colors from "../utility/colors";

const AppButton = ({ title = "Button", disabled = false, onPress, style }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, style]}
      onPress={onPress}
    >
      <AppText style={styles.buttonText}>{title}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
  },
});

export default AppButton;
