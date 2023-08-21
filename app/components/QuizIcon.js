import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

import colors from "../utility/colors";

import data from "../utility/data";

const QuizIcon = ({ quizId }) => {
  const quiz = data.getQuizById(quizId);

  return (
    <TouchableOpacity
      style={iconStyles.container}
      onPress={() => console.log(quiz)}
    >
      {quiz.completed ? (
        <Image
          source={require("../assets/colorLongFlower.png")}
          style={{ width: 40, height: 50 }}
        />
      ) : (
        <Image
          source={require("../assets/grayLongFlower.png")}
          style={iconStyles.image}
        />
      )}
    </TouchableOpacity>
  );
};

const iconStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray4,
    padding: 5,
    borderRadius: 50,
    overflow: "hidden",
  },
  image: {
    height: 60,
    width: 60,
    // backgroundColor: "gray",
  },
});

export default QuizIcon;
