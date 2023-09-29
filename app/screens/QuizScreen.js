import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import colors from "../utility/colors";
import { getQuizById } from "../database/grammer/quizzes";
import { getQuestionById } from "../database/grammer/questions";

import AppProgressBar from "../components/AppProgressBar";
import Result from "../components/Result";
import cache from "../utility/cache";
import { useHideBottomTabBar } from "../hooks/useHideBottomTabBar";
import CheckQuizButton from "../components/CheckQuizButton";
import Quiz from "../components/Quiz";
import FillInBlank from "../components/FillInBlankQuiz";
import Explanation from "../components/Explanation";

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
    // validate options type quiz
    if (selectedOptions.length > 0) {
      setIsValidatedOption(true);

      if (
        checkOptionsContainAnswers(selectedOptions, question?.correctOptionId)
      ) {
        incrementCorrectCount();
        setIsCorrect(true);
      }
    }
  };

  const incrementCorrectCount = () => {
    setCorrectAnswerCount((preCount) => preCount + 1);
  };

  function checkOptionsContainAnswers(chosenOptions, answers) {
    let answerIds;

    if (typeof answers === "string") {
      answerIds = [answers];
    } else {
      answerIds = [...answers];
    }

    // check if chosen options are correct or not
    return answerIds.every((answerId) => {
      let index = chosenOptions.findIndex((option) => option?.id === answerId);
      if (index < 0) return false;
      return true;
    });
  }

  return (
    <>
      {currentQuestionIndex < QUESTION_COUNT ? (
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            <View style={styles.body}>
              <AppProgressBar
                progress={progress}
                style={{ backgroundColor: colors.gray5 }}
              />

              {question?.type === "fillIn_blank" ? (
                <FillInBlank
                  question={question}
                  handleNextQeustion={handleNextQeustion}
                  incrementCorrectCount={incrementCorrectCount}
                />
              ) : (
                <Quiz
                  handleOptionSelect={handleOptionSelect}
                  selectedOptions={selectedOptions}
                  question={question}
                />
              )}
            </View>
            <View
              style={[
                styles.footer,
                isValidatedOption ? { backgroundColor: colors.white } : "",
              ]}
            >
              {isValidatedOption && (
                <Explanation
                  isCorrect={isCorrect}
                  explanation={question?.explanation}
                />
              )}
              {question?.type !== "fillIn_blank" && (
                <CheckQuizButton
                  isCorrect={isCorrect}
                  isValidatedOption={isValidatedOption}
                  handleNextQeustion={handleNextQeustion}
                  handleOptionValidation={handleOptionValidation}
                  selectedOptions={selectedOptions}
                />
              )}
            </View>
          </View>
        </ScrollView>
      ) : (
        <Result correct={correctAnswerCount} totalQuestions={QUESTION_COUNT} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 20,
    marginTop: 30,
    // backgroundColor: "red",
    justifyContent: "space-around",
    gap: 50,
    // flex: 1,
  },

  container: {
    justifyContent: "space-between",
    // backgroundColor: "green",
    paddingTop: 16,
    gap: 25,
    // flex: 1,
  },
  footer: {
    padding: 20,
    gap: 20,
    // backgroundColor: "yellow",
  },
});

export default QuizScreen;
