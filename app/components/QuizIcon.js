import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../utility/colors";
import CircularProgress from "./CircularProgress";
import useQuizData from "./hooks/useQuizData";

import * as Progress from "react-native-progress";

const QuizIcon = ({ completedQuizzes, completed, quizId, topicId }) => {
  console.log("QuizIcon render");

  //   const { completedQuizzes } = useQuizData();
  const [progress, setProgress] = useState(0);
  const navigation = useNavigation();

  const calculateProgress = (topicId, quizId) => {
    console.log("PROGRESS CALCULATED");
    const [quizProgressData] = completedQuizzes?.filter(
      (quiz) => quiz.quizId === quizId && quiz.topicId === topicId
    );

    console.log({ completedQuizzes });

    if (quizProgressData) {
      const { correct, total } = quizProgressData;
      let percent = (correct / total) * 100;

      setProgress(isNaN(percent) ? 0 : percent);
    }
  };

  useEffect(() => {
    calculateProgress(topicId, quizId);
    // navigation.addListener("focus", () => {
    //   console.log("Icon FOCUSED");
    //   calculateProgress(topicId, quizId);
    // });
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
    height: 50,
    width: 50,
  },
  outerContainer: {
    backgroundColor: colors.gray3,
    width: 90,
    height: 90,
    borderRadius: 45,
    padding: 2,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default QuizIcon;
