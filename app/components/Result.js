import React from "react";
import { View, Text, StyleSheet } from "react-native";

import AppButton from "./AppButton";
import colors from "../utility/colors";
import { useNavigation } from "@react-navigation/native";
import AppText from "./Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "./Icon";

const Result = ({ correct, totalQuestions }) => {
  const navigation = useNavigation();

  const percent = (correct / totalQuestions) * 100;
  let message = "";

  if (percent > 90) {
    message = "Congratulations! You're a Quiz Master! 🎉";
  } else if (percent > 60) {
    message = "Great job! You're on the right track! 🌟";
  } else {
    message = "Well done on completing the quiz! 🌱";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.messageText}>{message}</Text>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>{percent}% </Text>
      </View>

      <View style={styles.scoreTextContainer}>
        <AppText style={styles.scoreText}> {correct}</AppText>
        <Icon name={"check"} size={40} color="green" />
      </View>
      <View style={styles.scoreTextContainer}>
        <AppText style={styles.scoreText}>{totalQuestions - correct}</AppText>
        <Icon name={"close"} size={40} color="red" />
      </View>

      <AppButton
        title="Next Quiz"
        style={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray2,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 30,
  },
  button: {
    borderRadius: 12,
    width: "100%",
    marginTop: 30,
  },
  messageText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "400",
    marginBottom: 16,
  },
  score: {
    color: colors.white,
    fontSize: 42,
  },
  scoreText: {
    color: colors.white,
    fontSize: 28,
  },
  scoreTextContainer: {
    borderWidth: 1,
    borderColor: "white",
    marginVertical: 18,
    gap: 20,
    padding: 4,
    textAlign: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  scoreContainer: {
    backgroundColor: colors.gray3,
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 75,
    borderWidth: 4,
    borderColor: colors.gray4,
  },
});

export default Result;
