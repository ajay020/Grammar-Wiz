import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../utility/colors";
import QuizIcon from "../components/QuizIcon";

const ExpandableItem = ({ quizzes }) => {
  return (
    <View style={styles.container}>
      {quizzes.map((quizId) => (
        <QuizIcon key={quizId} quizId={quizId} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.gray2,
    flexDirection: "row",
    paddingVertical: 24,
    gap: 24,
  },
  image: {},
});

export default ExpandableItem;
