import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import useQuizData from "../hooks/useQuizData";
import QuizIcon from "../components/QuizIcon";
import colors from "../utility/colors";
import { useNavigation } from "@react-navigation/native";
import Text from "../components/Text";
import Icon from "../components/Icon";

const QuizListScreen = ({ route }) => {
  const { completedQuizzes, fetchCompletdQuizzes } = useQuizData();

  const { id: topicId, quizzes: quizIds, title } = route?.params?.data;
  const navigation = useNavigation();

  // Set navigation headr title
  React.useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, [navigation, route]);

  const navigateToQuizScreen = (quizId) => {
    navigation.addListener("focus", () => {
      fetchCompletdQuizzes();
    });
    navigation.navigate("QuizScreen", {
      quizId,
      topicId,
      title,
    });
  };

  const numItems = quizIds.length; // Number of items in the circular layout
  const radius = 140; // Adjust as needed

  return (
    <View style={styles.container}>
      <View style={styles.circularContainer}>
        {quizIds?.map((quizId, index) => {
          const angle = (360 / numItems) * index;
          const translateX = radius * Math.cos((angle * Math.PI) / 180);
          const translateY = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <View
              key={quizId}
              style={[
                styles.circularItem,
                {
                  transform: [
                    { translateX: translateX },
                    { translateY: translateY },
                    //   { rotate: `${angle}deg` },
                  ],
                },
              ]}
            >
              <TouchableOpacity
                activeOpacity={0.3}
                onPress={() => navigateToQuizScreen(quizId)}
              >
                <QuizIcon
                  completed={completedQuizzes.find(
                    (quiz) => quiz.quizId == quizId && topicId === quiz.topicId
                  )}
                  quizId={quizId}
                  topicId={topicId}
                  completedQuizzes={completedQuizzes}
                />
              </TouchableOpacity>
            </View>
          );
        })}

        {/* Center trophy icon  */}
        <Icon name={"trophy"} color="gold" size={40} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.gray2,
    flex: 1,
    justifyContent: "center",
  },
  circularContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.gray3,
    padding: 18,
    borderWidth: 2,
    borderRadius: 50,
  },
  circularItem: {
    width: 80,
    height: 80,
    backgroundColor: colors.gray1,
    borderRadius: 40, // Make sure it's half the width/height to create a circle
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.gray1,
  },
});

export default QuizListScreen;
