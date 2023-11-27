import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import QuestionItem from "./QeustionItem";
import AnswerItem from "./AnswerItem";

const quizData = {
  id: 1,

  questions: [
    { id: 1, text: "What time is now?", matched: false },
    { id: 2, text: "banana", matched: false },
    { id: 3, text: "apple", matched: false },
    { id: 4, text: "orange", matched: false },
  ],
  answers: [
    { id: 1, text: "NOW", matched: false },
    { id: 2, text: "yellow", matched: false },
    { id: 3, text: "green", matched: false },
    { id: 4, text: "yellow", matched: false },
  ],
};

const MatchingQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isCorrect, setIsCorrect] = useState("");

  useEffect(() => {
    let id = setTimeout(() => {
      setIsCorrect("");
    }, 1000);
    return () => clearTimeout(id);
  }, [isCorrect]);

  useEffect(() => {
    const shuffledQuestions = shuffleArray([...quizData.questions]);
    const shuffledAnswers = shuffleArray([...quizData.answers]);
    setQuestions(shuffledQuestions);
    setAnswers(shuffledAnswers);
  }, []);

  const shuffleArray = (array) => {
    // Function to shuffle an array (Fisher-Yates algorithm)
    let currentIndex = array.length;
    let randomIndex, temporaryValue;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const handleQestionSelection = (question) => {
    setSelectedQuestion((prevQuestion) =>
      question?.id == prevQuestion?.id ? null : question
    );

    if (question?.id == selectedAnswer?.id) {
      markMatchdPairs(question.id);
      setIsCorrect("correct");

      clearSelected();
    } else if (selectedAnswer && question?.id !== selectedAnswer?.id) {
      setIsCorrect("inCorrect");

      clearSelected();
    }
  };

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer((prevAnswer) =>
      prevAnswer?.id == answer?.id ? null : answer
    );

    if (answer?.id == selectedQuestion?.id) {
      markMatchdPairs(answer.id);
      setIsCorrect("correct");
      clearSelected();
    } else if (selectedQuestion && answer?.id !== selectedQuestion?.id) {
      setIsCorrect("inCorrect");
      clearSelected();
    }
  };

  const markMatchdPairs = (id) => {
    setAnswers((prev) => {
      const updatedAnswers = prev.map((ans) =>
        ans.id === id ? { ...ans, matched: true } : ans
      );
      checkCompletion(updatedAnswers);
      return updatedAnswers;
    });
    setQuestions((prev) => {
      const updatedQuestions = prev.map((question) =>
        question.id === id ? { ...question, matched: true } : question
      );
      checkCompletion(updatedQuestions);
      return updatedQuestions;
    });
  };

  const clearSelected = () => {
    setSelectedAnswer(null);
    setSelectedQuestion(null);
  };

  const checkCompletion = (array) => {
    const allMatched = array.every((item) => item.matched);
    if (allMatched) {
      setQuizCompleted(true);
    }
  };

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.headingText}>Match the correct Pairs</Text>
      <Text style={{ textAlign: "center" }}>
        {isCorrect === "correct"
          ? "Right"
          : isCorrect === "inCorrect"
          ? "Wrong"
          : ""}
      </Text>

      {quizCompleted && <Text>Congratulations! Quiz Completed!</Text>}
      <View style={styles.container}>
        <View style={styles.column}>
          {questions.map((question, index) => (
            <QuestionItem
              key={index}
              question={question}
              selectedQuestion={selectedQuestion}
              onPress={() => handleQestionSelection(question)}
              disabled={question.matched}
            />
          ))}
        </View>
        <View style={styles.column}>
          {answers.map((answer, index) => (
            <AnswerItem
              key={index}
              answer={answer}
              selectedAnswer={selectedAnswer}
              onPress={() => handleAnswerSelection(answer)}
              disabled={answer.matched}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 24,
    // backgroundColor: "lightgray",
  },
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // backgroundColor: "gray",
  },
  column: {
    flex: 1,
    alignItems: "center",
    gap: 12,
    // margin: 10,
    // backgroundColor: "green",
  },
  headingText: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default MatchingQuiz;
