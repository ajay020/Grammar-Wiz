import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../utility/colors";
import AppButton from "../components/AppButton";
import Text from "../components/Text";
import { getQuizById } from "../database/grammer/quizzes";
import { getQuestionById } from "../database/grammer/questions";

import AppProgressBar from "../components/AppProgressBar";
import Result from "../components/Result";
import cache from "../utility/cache";
import { useHideBottomTabBar } from "../hooks/useHideBottomTabBar";

const QuizScreen = ({ route, navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(0.02);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isValidatedOption, setIsValidatedOption] = useState(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const { quizId, topicId, title } = route?.params;
  const quiz = getQuizById(quizId);
  const questions = quiz?.questions;

  const question = getQuestionById(questions?.[currentQuestionIndex]);
  const QUESTION_COUNT = questions?.length;

  // Hide Bottom tab navigation layout.
  useHideBottomTabBar();

  // Set the header title dynamically based on the passed title parameter
  React.useLayoutEffect(() => {
    navigation.setOptions({ title: title });
  }, [navigation, route]);

  const handleNextQeustion = async () => {
    setSelectedOptions([]);
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
      if (typeof question.correctOptionId === "string") {
        setSelectedOptions([option]);
      } else {
        setSelectedOptions((prev) => toggleOption(prev, option));
      }
    }
  };

  function toggleOption(selectedOptions, optionToAdd) {
    // Check if the optionToAdd already exists in selectedOptions
    const index = selectedOptions.findIndex(
      (option) => option.id === optionToAdd.id
    );

    // If the optionToAdd is not in selectedOptions, add it
    if (index === -1) {
      return [...selectedOptions, optionToAdd];
    } else {
      // If the optionToAdd is already in selectedOptions, remove it
      return selectedOptions.filter((option) => option.id !== optionToAdd.id);
    }
  }

  const handleOptionValidation = () => {
    if (selectedOptions.length > 0) {
      setIsValidatedOption(true);

      if (
        checkOptionsContainAnswers(selectedOptions, question.correctOptionId)
      ) {
        setCorrectAnswerCount((preCount) => preCount + 1);
        setIsCorrect(true);
      }
    }
  };

  function checkOptionsContainAnswers(options, answers) {
    let answerIds;

    if (typeof answers === "string") {
      answerIds = [answers];
    } else {
      answerIds = [...answers];
    }

    // Create a Set from the answers array for faster lookup
    const answerSet = new Set(answerIds);
    // Iterate over the options and check if each option has an id that is in the answer ids set.
    for (const option of options) {
      if (!answerSet.has(option.id)) {
        return false;
      }
    }

    return true;
  }

  return (
    <>
      {currentQuestionIndex < QUESTION_COUNT ? (
        <View style={styles.container}>
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
                  selectedOptions.find(
                    (selectdOp) => selectdOp?.id === option?.id
                  ) && {
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
              <Text
                style={[
                  styles.resultText,
                  isCorrect && { color: colors.primary },
                  !isCorrect && { color: colors.danger },
                ]}
              >
                {isCorrect ? "Correct" : ""}
                {!isCorrect && isValidatedOption ? "Incorrect" : ""}
              </Text>
              {isValidatedOption && (
                <Text style={styles.explainText}>{question?.explanation}</Text>
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

                  !selectedOptions.length && styles.disableButton,
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
    marginTop: 30,
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
    gap: 16,
  },
  resultText: {
    textAlign: "left",
    fontWeight: "bold",
  },

  explainText: {
    fontSize: 16,
    textAlign: "left",
    color: colors.black,
  },
  footer: {
    padding: 20,
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
    marginVertical: 16,
  },
});

export default QuizScreen;
