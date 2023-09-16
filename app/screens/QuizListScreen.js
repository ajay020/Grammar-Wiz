import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import useQuizData from "../hooks/useQuizData";
import colors from "../utility/colors";
import Text from "../components/Text";
import Icon from "../components/Icon";
import CheckIcon from "../components/CheckIcon";
import { useHideBottomTabBar } from "../hooks/useHideBottomTabBar";
import TopicSummary from "../components/TopicSummary";

const QuizListScreen = ({ route }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const { completedQuizzes, fetchCompletdQuizzes } = useQuizData();
  const { id: topicId, quizzes: quizIds, title, summary } = route?.params?.data;
  const navigation = useNavigation();

  // Hide Bottom tab navigation layout.
  useHideBottomTabBar();

  // Check if all quizzes have been completed
  const allQuizzesCompleted = quizIds.every((quizId) => {
    // Check if there is a completed quiz with the same quizId
    return completedQuizzes.some(
      (completedQuiz) => completedQuiz.quizId === quizId
    );
  });

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

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <TouchableOpacity
        style={{
          alignItems: "center",
          paddingVertical: 18,
        }}
        onPress={toggleModal}
      >
        <Icon name={"book"} size={56} />
        <TopicSummary
          topicId={topicId}
          isVisible={isModalVisible}
          onClose={toggleModal}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        {quizIds.map((quizId, index) => {
          let isQuizTaken = completedQuizzes.find(
            (quiz) => quiz.quizId === quizId
          );
          return (
            <TouchableOpacity
              key={quizId}
              activeOpacity={0.3}
              style={styles.quizItem}
              onPress={() => navigateToQuizScreen(quizId)}
            >
              <Text> Quiz {index + 1}</Text>

              {isQuizTaken ? <CheckIcon /> : null}
            </TouchableOpacity>
          );
        })}
        <View style={[styles.trophyContainer]}>
          <Icon
            name={"trophy"}
            color={`${allQuizzesCompleted ? colors.golden : "gray"}`}
            size={50}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    padding: 16,
    alignItems: "center",
    // justifyContent: "center",
  },
  checkBox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "dodgerblue",
  },
  quizItem: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 5,
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 10,
    width: "90%",
  },
  trophyContainer: {
    alignItems: "center",
    // borderWidth: 2,
    // borderRadius: 35,
    // borderColor: colors.gray4,
    // width: 80,
    // height: 80,
    padding: 12,
  },
});

export default QuizListScreen;
