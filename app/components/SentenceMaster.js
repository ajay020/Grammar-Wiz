import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";

import AppText from "./Text";
import colors from "../utility/colors";
import SentenceModal from "./SentenceModal";
import useTimer from "../hooks/useTimer";
import AppProgressBar from "./AppProgressBar";
import { getQuizzesByDifficulty } from "../utility/gameData";

function shuffleArray(array) {
  // Create a copy of the original array to avoid modifying it directly
  const shuffledArray = [...array];

  // Shuffle the array using Fisher-Yates algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

const SentenceMaster = ({ route }) => {
  const [currectQuizIndex, setCurrectQuizIndex] = useState(0);
  const [currentWordPosition, setCurrentWordPosition] = useState(1);
  const [arrangedWords, setArrangedWords] = useState([]);
  const [words, setWords] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const {
    data: { level },
  } = route.params;

  // fetch quizzes by difficulty
  const quizzes = getQuizzesByDifficulty(level);
  //   console.log(quizzes);

  const handleTimerComplete = () => {
    openModal();
  };

  const { progress, startTimer, resetTimer, stopTimer, timeLeft } = useTimer(
    60,
    handleTimerComplete
  );

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    if (currectQuizIndex < quizzes?.length) {
      const sentence = quizzes[currectQuizIndex];
      const shuffleWords = shuffleArray(sentence.words);
      setWords([...shuffleWords]);
    } else {
      stopTimer();
      Alert.alert("Congratulations! You completed all the quizzes!!");
    }
  }, [currectQuizIndex]);

  useEffect(() => {
    if (words?.length == 0 && arrangedWords.length) {
      // show modal for retake or next quiz
      stopTimer();
      openModal();
    }
  }, [words.length]);

  const moveToNextSentence = () => {
    if (currectQuizIndex < quizzes?.length) {
      setCurrentWordPosition(1);
      setArrangedWords([]);
      setCurrectQuizIndex((prev) => prev + 1);
      closeModal();
      resetTimer();
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentWordPosition(1);
    setCurrectQuizIndex((prev) => prev);
    const sentence = quizzes[currectQuizIndex];
    // shffle words
    const shuffleWords = shuffleArray(sentence.words);

    setWords([...shuffleWords]);
    setArrangedWords([]);
    closeModal();
    resetTimer();
  };

  const handleWordSelect = (word) => {
    if (word.position === currentWordPosition) {
      setArrangedWords((prev) => [...prev, word]);
      setCurrentWordPosition((prev) => prev + 1);
      setWords(words.filter((w) => w.id !== word.id));
    }
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.output}>
          {arrangedWords.map((word) => (
            <AppText key={word.id} style={styles.wordChip}>
              {word.text}
            </AppText>
          ))}
        </View>
        <View style={styles.progressContainer}>
          {progress > 0 && (
            <AppProgressBar progress={progress} range={100} duration={600} />
          )}
        </View>
        <View style={styles.input}>
          {words?.map((word) => (
            <TouchableOpacity
              onPress={() => handleWordSelect(word)}
              key={word.id}
              activeOpacity={0.8}
            >
              <AppText style={styles.wordChip}>{word.text}</AppText>
            </TouchableOpacity>
          ))}
        </View>
        {/* Sentence Modal */}
        <SentenceModal
          words={arrangedWords}
          handleRetakeQuiz={handleRetakeQuiz}
          modalVisible={modalVisible}
          moveToNextSentence={moveToNextSentence}
          timeLeft={timeLeft}
          closeModal={closeModal}
        />
        {/* Sentence Modal */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray4,
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    alignItems: "center",
    alignContent: "center",
    backgroundColor: colors.gray3,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    padding: 10,
  },
  output: {
    backgroundColor: colors.gray2,
    alignItems: "center",
    alignContent: "center",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    padding: 10,
  },
  progressContainer: {
    backgroundColor: colors.gray1,
    height: 24,
    borderWidth: 1,
    borderColor: colors.gray2,
    justifyContent: "center",
    alignItems: "center",
  },
  wordChip: {
    color: colors.white,
    backgroundColor: colors.gray1,
    borderWidth: 1,
    borderRadius: 14,
    fontSize: 24,
    padding: 16,
  },
});

export default SentenceMaster;
