import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View } from "react-native";

import colors from "../utility/colors";
import CircularProgress from "./CircularProgress";

const QuizIcon = ({ completedQuizzes, completed, quizId, topicId }) => {
  //   console.log("QuizIcon render");
  const [progress, setProgress] = useState(0);

  const calculateProgress = (topicId, quizId) => {
    const [quizProgressData] = completedQuizzes?.filter(
      (quiz) => quiz.quizId === quizId && quiz.topicId === topicId
    );

    if (quizProgressData) {
      const { correct, total } = quizProgressData;
      let percent = (correct / total) * 100;

      setProgress(isNaN(percent) ? 0 : percent);
    }
  };

  useEffect(() => {
    calculateProgress(topicId, quizId);
  }, [quizId, topicId, completedQuizzes]);

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        {completed ? (
          <Image
            source={require("../assets/colorLongFlower.png")}
            style={styles.image}
          />
        ) : (
          <Image
            source={require("../assets/grayLongFlower.png")}
            style={styles.image}
          />
        )}
      </View>
      <CircularProgress radius={40} strokeWidth={4} progress={progress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray3,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  image: {
    height: 40,
    width: 40,
  },
  outerContainer: {
    backgroundColor: colors.gray3,
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 2,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default QuizIcon;
