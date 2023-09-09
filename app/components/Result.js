import React from "react";
import { View, Text, StyleSheet } from "react-native";

import AppButton from "./AppButton";
import colors from "../utility/colors";
import { useNavigation } from "@react-navigation/native";
import AppText from "./Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "./Icon";
import CheckIcon from "./CheckIcon";

const Result = ({ correct, totalQuestions }) => {
  const navigation = useNavigation();

  const percent = (correct / totalQuestions) * 100;
  let message = "";

  if (percent > 80) {
    message = "Congratulations! You're a Quiz Master! 🎉";
  } else if (percent > 60) {
    message = "Great job! You're on the right track! 🌟";
  } else {
    message = "Well done on completing the quiz! 🌱";
  }

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <CheckIcon
          color={colors.white}
          backgroundColor={colors.primary}
          size={38}
          style={{ width: 70, height: 70, borderRadius: 35 }}
        />
        <Text style={styles.messageText}>{message}</Text>
      </View>
      <View style={styles.box2}>
        <View style={styles.scoreContainer}>
          <Text style={styles.score}>{percent}% </Text>
        </View>

        <View style={styles.box}>
          <View style={styles.scoreTextContainer}>
            <AppText style={styles.scoreText}> {correct}</AppText>
            <Icon name={"check"} size={24} color="green" />
          </View>
          <View style={styles.scoreTextContainer}>
            <AppText style={styles.scoreText}>
              {totalQuestions - correct}
            </AppText>
            <Icon name={"close"} size={24} color="red" />
          </View>
        </View>
      </View>

      <AppButton
        title="Next Quiz"
        style={styles.button}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    gap: 12,
  },
  box1: {
    alignItems: "center",
  },
  box2: {
    alignItems: "center",
    gap: 12,
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    gap: 22,
    paddingHorizontal: 30,
  },
  button: {
    borderRadius: 12,
    width: "100%",
    // marginTop: "auto",
    marginBottom: 12,
  },
  messageText: {
    color: colors.black,
    fontSize: 24,
    fontWeight: "400",
    marginTop: 16,
  },
  score: {
    color: colors.black,
    fontSize: 40,
  },
  scoreText: {
    color: colors.black,
    fontSize: 20,
  },
  scoreTextContainer: {
    marginVertical: 18,
    gap: 16,
    padding: 12,
    textAlign: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  scoreContainer: {
    width: 180,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "whtie",
    padding: 12,
  },
});

export default Result;
