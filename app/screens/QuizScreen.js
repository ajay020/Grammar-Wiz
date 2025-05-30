import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";

import colors from "../utility/colors";
import { getQuizById } from "../database/grammer/quizzes";
import { getQuestionById } from "../database/grammer/questions";

import AppProgressBar from "../components/AppProgressBar";
import Result from "../components/Result";
import cache from "../utility/cache";
import FillInBlank from "../components/FillInBlankQuiz";
import SelectOptionQuiz from "../components/SelectOptionQuiz";
import { ThemedView } from "../themedComponents/ThemedText";

const QuizScreen = ({ route, navigation }) => {
  const { quizId, topicId, title } = route?.params;
  const [progress, setProgress] = useState(0.0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const quiz = getQuizById(quizId);
  const [quizTitle, setQuizTitle] = useState(quiz?.text);

  const questions = quiz?.questions;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const question = getQuestionById(questions?.[currentQuestionIndex]);
  const totalQuestionNumber = questions?.length;

  // Set the header title dynamically based on the passed title parameter
  React.useLayoutEffect(() => {
    navigation.setOptions({ title: title });
  }, [navigation, route]);

  const handleNextQeustion = async () => {
    if (currentQuestionIndex < totalQuestionNumber) {
      // Slide out the current question and update progress
      const nextProgress = (currentQuestionIndex + 1) / totalQuestionNumber;
      setProgress(nextProgress);

      setCurrentQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
    }
    // Quiz is completed, save its id to local storage
    if (currentQuestionIndex == totalQuestionNumber - 1) {
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
            total: totalQuestionNumber,
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

  const incrementCorrectCount = () => {
    setCorrectAnswerCount((preCount) => preCount + 1);
  };

  if (currentQuestionIndex == totalQuestionNumber) {
    return (
      <Result
        correct={correctAnswerCount}
        totalQuestions={totalQuestionNumber}
      />
    );
  }

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        justifyContent: "space-between",
        // backgroundColor: "lightblue",
        flex: 1,
      }}
    >
      <ThemedView style={styles.container}>
        <AppProgressBar
          progress={progress}
          style={{
            backgroundColor: colors.gray5,
          }}
        />

        {question?.type === "fillIn_blank" ? (
          <FillInBlank
            question={question}
            handleNextQeustion={handleNextQeustion}
            incrementCorrectCount={incrementCorrectCount}
          />
        ) : (
          <SelectOptionQuiz
            quizTitle={quizTitle}
            question={question}
            handleNextQeustion={handleNextQeustion}
            incrementCorrectCount={incrementCorrectCount}
          />
        )}
      </ThemedView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "green",
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: "center",
  },
});

export default QuizScreen;
