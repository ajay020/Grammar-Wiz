import React, { useState } from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Text from "../components/Text";
import colors from "../utility/colors";
import AppButton from "../components/AppButton";
import AppText from "../components/Text";
import data from "../utility/data";
import AppProgressBar from "../components/AppProgressBar";
import Result from "../components/Result";
import cache from "../utility/cache";

const QuizScreen = ({ route, navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isValidatedOption, setIsValidatedOption] = useState(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

  const { quizId, topicId, title } = route?.params;
  const quiz = data.getQuizById(quizId);
  const questions = quiz?.questions;

  const question = data?.getQuestionById(questions?.[currentQuestionIndex]);
  const topic = data.getTopicById(quiz.topicId);
  const QUESTION_COUNT = questions?.length;

  // Set the header title dynamically based on the passed title parameter
  React.useLayoutEffect(() => {
    navigation.setOptions({ title: title });
  }, [navigation, route]);

  const handleNextQeustion = async () => {
    setSelectedOption(null);
    setIsValidatedOption(false);

    if (currentQuestionIndex < QUESTION_COUNT) {
      // Slide out the current question and update progress
      const nextProgress = (currentQuestionIndex + 1) / QUESTION_COUNT;
      setProgress(nextProgress);

      setCurrentQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
    }
    // Quiz is completed, save its id to local storage
    if (currentQuestionIndex == QUESTION_COUNT - 1) {
      saveQuiz();
    }
  };

  const saveQuiz = async () => {
    try {
      // Retrieve existing quizzes from local storage
      const existingQuizzes = (await cache.getData("completedQuizzes")) || [];

      let existQuiz = existingQuizzes.find(
        (item) => item.quizId === quizId && item.topicId === topicId
      );

      if (!existQuiz) {
        const modifiedQuizzes = [
          ...existingQuizzes,
          {
            quizId,
            topicId,
            correct: correctAnswerCount,
            total: QUESTION_COUNT,
          },
        ];
        // Store the modified quizzes back to local storage
        await cache.storeData("completedQuizzes", modifiedQuizzes);
        console.log("Quiz  Saved");
      } else {
        if (existQuiz.correct < correctAnswerCount) {
          const updatedQuiz = { ...existQuiz, correct: correctAnswerCount };
          const updatedQuizzes = existingQuizzes.map((q) => {
            if (
              q.quizId === updatedQuiz.quizId &&
              q.topicId === updatedQuiz.topicId
            ) {
              return updatedQuiz;
            }
            return q;
          });
          await cache.storeData("completedQuizzes", updatedQuizzes);
          console.log("Quiz  updated");
        }
      }
    } catch (error) {
      console.log("Error adding QuizId to completedQuzzes:", error);
    }
  };

  const handleOptionSelect = (option) => {
    if (!isValidatedOption) {
      setSelectedOption(option);
    }
  };

  const handleOptionValidation = () => {
    if (selectedOption) {
      setIsValidatedOption(true);
      if (selectedOption.id === question.correctOptionId) {
        setCorrectAnswerCount((preCount) => preCount + 1);
      }
    }
  };

  return (
    <>
      {currentQuestionIndex < QUESTION_COUNT ? (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTxt}>{topic?.title}</Text>
            <AppProgressBar progress={progress} />
          </View>

          <View style={styles.body}>
            <Text style={styles.questionTxt}>{question?.text}</Text>
            {question?.options?.map((option) => (
              <TouchableOpacity
                key={option.id}
                activeOpacity={0.9}
                onPress={() => handleOptionSelect(option)}
              >
                <Text
                  style={[
                    styles.optionTxt,
                    option?.id === selectedOption?.id && {
                      backgroundColor: colors.gray4,
                    },

                    isValidatedOption &&
                      option.id === question?.correctOptionId && {
                        borderColor: "green",
                      },
                    isValidatedOption &&
                      option.id === selectedOption?.id &&
                      selectedOption?.id !== question?.correctOptionId && {
                        borderColor: "red",
                      },
                  ]}
                >
                  {option.text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.footer}>
            <View style={styles.explainContainer}>
              <AppText style={styles.explainLable}> Explanation:</AppText>
              <AppText style={styles.explainText}>
                {question?.explanation}
              </AppText>
            </View>
            <AppButton
              onPress={
                isValidatedOption ? handleNextQeustion : handleOptionValidation
              }
              title={isValidatedOption ? "Next" : "Check"}
              style={[styles.button, !selectedOption && styles.disableButton]}
            />
          </View>
        </View>
      ) : (
        <Result correct={correctAnswerCount} totalQuestions={QUESTION_COUNT} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: colors.gray1,
    gap: 22,
  },
  button: {
    fontSize: 28,
    marginVertical: 6,
    borderRadius: 14,
    borderColor: colors.gray4,
  },
  container: {
    backgroundColor: colors.gray1,
    justifyContent: "space-between",
    height: "100%",
    paddingHorizontal: 20,
  },
  disableButton: {
    backgroundColor: colors.gray3,
    borderWidth: 0.5,
    paddingVertical: 12,
  },
  errorButton: {
    backgroundColor: "tomato",
  },
  explainContainer: {
    backgroundColor: colors.gray3,
    marginBottom: 24,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.gray4,
  },
  explainLable: {
    fontSize: 22,
    fontWeight: 400,
    color: colors.white,
  },
  explainText: {
    fontSize: 20,
    color: colors.white,
    padding: 0,
  },
  footer: {
    // backgroundColor: colors.gray2,
    paddingVertical: 12,
    gap: 12,
  },
  header: {
    alignItems: "center",
    backgroundColor: colors.gray2,

    padding: 16,
    gap: 12,
  },
  headerTxt: {
    color: colors.white,
    fontSize: 30,
  },
  optionTxt: {
    borderWidth: 0.5,
    borderColor: colors.white,
    borderRadius: 12,
    backgroundColor: colors.gray1,
    color: colors.white,
    fontSize: 22,
    padding: 10,
    textAlign: "center",
  },
  questionTxt: {
    color: colors.white,
    fontSize: 28,
    fontWeight: "400",
    textAlign: "center",
  },
});

export default QuizScreen;
