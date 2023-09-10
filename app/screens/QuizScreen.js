import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Text from "../components/Text";
import colors from "../utility/colors";
import AppButton from "../components/AppButton";
import AppText from "../components/Text";
import { getQuizById } from "../database/grammer/quizzes";
import { getQuestionById } from "../database/grammer/questions";
import { getTopicById } from "../database/grammer/topics";

import AppProgressBar from "../components/AppProgressBar";
import Result from "../components/Result";
import cache from "../utility/cache";
import { useHideBottomTabBar } from "../hooks/useHideBottomTabBar";

const QuizScreen = ({ route, navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(0.02);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isValidatedOption, setIsValidatedOption] = useState(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const { quizId, topicId, title } = route?.params;
  const quiz = getQuizById(quizId);
  const questions = quiz?.questions;

  const question = getQuestionById(questions?.[currentQuestionIndex]);
  const topic = getTopicById(quiz?.topicId);
  const QUESTION_COUNT = questions?.length;

  // Hide Bottom tab navigation layout.
  useHideBottomTabBar();

  // Set the header title dynamically based on the passed title parameter
  React.useLayoutEffect(() => {
    navigation.setOptions({ title: title });
  }, [navigation, route]);

  const handleNextQeustion = async () => {
    setSelectedOption(null);
    setIsValidatedOption(false);
    setIsCorrect(false);

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
        setIsCorrect(true);
      }
    }
  };

  console.log(isCorrect, isValidatedOption);

  return (
    <>
      {currentQuestionIndex < QUESTION_COUNT ? (
        <View style={styles.container}>
          {/* <View style={styles.header}></View> */}

          <View style={styles.body}>
            <AppProgressBar
              progress={progress}
              style={{ backgroundColor: colors.gray5 }}
            />
            <Text style={styles.questionTxt}>{question?.text}</Text>
            {question?.options?.map((option) => (
              <TouchableOpacity
                key={option.id}
                activeOpacity={0.9}
                onPress={() => handleOptionSelect(option)}
                style={[
                  styles.optionContainer,
                  option?.id === selectedOption?.id && {
                    backgroundColor: colors.gray5,
                  },
                ]}
              >
                <Text style={[styles.optionTxt]}>{option.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View
            style={[
              styles.footer,
              isValidatedOption ? { backgroundColor: colors.white } : "",
            ]}
          >
            <View style={styles.explainContainer}>
              <AppText style={[styles.resultText]}>
                {isCorrect ? "correct" : ""}
                {!isCorrect && isValidatedOption ? "Incorrect" : ""}
              </AppText>
              {isValidatedOption && (
                <AppText style={styles.explainText}>
                  {question?.explanation}
                </AppText>
              )}
              <AppButton
                onPress={
                  isValidatedOption
                    ? handleNextQeustion
                    : handleOptionValidation
                }
                title={isValidatedOption ? "Next" : "Check"}
                style={[
                  styles.button,

                  !selectedOption && styles.disableButton,
                  isCorrect &&
                    isValidatedOption && { backgroundColor: colors.primary },
                  !isCorrect &&
                    isValidatedOption && { backgroundColor: colors.danger },
                ]}
              />
            </View>
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
    gap: 20,
    paddingHorizontal: 20,
  },
  button: {
    fontSize: 28,
    marginVertical: 6,
    borderRadius: 12,
    borderColor: colors.gray1,
    width: "100%",
    paddingHorizontal: 14,
  },
  container: {
    justifyContent: "space-between",
    height: "100%",
    paddingTop: 16,
  },
  disableButton: {
    backgroundColor: colors.gray3,
    borderWidth: 0.5,
    paddingHorizontal: 10,
  },

  explainContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },

  explainText: {
    fontSize: 18,
    color: colors.black,
    paddingVertical: 12,
  },
  footer: {
    paddingVertical: 12,
    gap: 12,
  },

  optionTxt: {
    color: colors.black,
    fontSize: 18,
    textAlign: "center",
  },
  optionContainer: {
    // elevation: 5,
    borderWidth: 0.5,
    borderBottomWidth: 2,
    borderColor: colors.black,
    borderRadius: 10,
    padding: 14,
  },
  questionTxt: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  resultText: {
    textAlign: "left",
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
});

export default QuizScreen;
