import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import QuestionItem from "./QeustionItem";
import { getMatchquizData } from "../utility/match_pair_data";
import CompletionDialog from "./CompletionDialog";
import { ThemedText, ThemedTouchableOpacity, ThemedView } from "../themedComponents/ThemedText";

const MatchingQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isCorrect, setIsCorrect] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDialog, setShowDialog] = useState(false);


  useEffect(() => {
    let id = setTimeout(() => {
      setIsCorrect("");
    }, 1000);
    return () => clearTimeout(id);
  }, [isCorrect]);

  useEffect(() => {
    const quizData = getMatchquizData(currentIndex);

    if (!quizData) {
      setQuizCompleted(true);
      return;
    }

    const shuffledQuestions = shuffleArray([...quizData.questions]);
    const shuffledAnswers = shuffleArray([...quizData.answers]);
    setQuestions(shuffledQuestions);
    setAnswers(shuffledAnswers);
  }, [currentIndex]);

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

  // Function to mark matched pairs
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
      setShowDialog(true);
    }
  };


  if (quizCompleted) {
    return (
      <ThemedView style={
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }
      }>
        <ThemedText style={{ marginBottom: 12 }}>You’ve completed all quizzes! 🎉</ThemedText>
        <ThemedTouchableOpacity
          style={{
            marginTop: 20,
          }}
          onPress={() => {
            setCurrentIndex(0);
            setQuizCompleted(false);
            setShowDialog(false);
            clearSelected();
            setIsCorrect("");
          }}
          color="#2196F3"
        >
          <ThemedText>Replay</ThemedText>
        </ThemedTouchableOpacity>
      </ThemedView>
    )
  }


  return (
    <ThemedView style={styles.outerContainer}>
      <ThemedText style={styles.headingText}>Match the correct Pairs</ThemedText>
      <ThemedText style={{ textAlign: "center", fontSize: 30 }}>
        {isCorrect === "correct"
          ? "Right"
          : isCorrect === "inCorrect"
            ? "Wrong"
            : ""}
      </ThemedText>


      <View style={styles.container}>
        <View style={styles.column}>
          {questions.map((question, index) => (
            <QuestionItem
              key={index}
              item={question}
              selectedQuestion={selectedQuestion}
              onPress={() => handleQestionSelection(question)}
              disabled={question?.matched ?? false}
            />
          ))}
        </View>
        <View style={styles.column}>
          {answers.map((answer, index) => (
            <QuestionItem
              key={index}
              item={answer}
              selectedAnswer={selectedAnswer}
              onPress={() => handleAnswerSelection(answer)}
              disabled={answer?.matched ?? false}
            />
          ))}
        </View>
      </View>

      {/* Dialog to show when quiz is completed */}
      <CompletionDialog
        visible={showDialog}
        onClose={() => setShowDialog(false)}
        onNext={() => {
          setShowDialog(false);
          setCurrentIndex(prev => prev + 1); // Next quiz
          setQuizCompleted(false);
        }}
      />
    </ThemedView>

  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 24,
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
    margin: 10,
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
