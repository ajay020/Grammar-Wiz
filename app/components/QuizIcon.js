import React from "react";
import { StyleSheet, Image, View } from "react-native";

import colors from "../utility/colors";
import data from "../utility/data";

const QuizIcon = ({ completed, quizId }) => {
  const quiz = data.getQuizById(quizId);

  console.log({ completed });

  return (
    <View style={iconStyles.container}>
      {completed ? (
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
    </View>
  );
};

const iconStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray3,
    padding: 4,
    borderRadius: 50,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
  },
  image: {
    height: 50,
    width: 50,
  },
});

export default QuizIcon;
