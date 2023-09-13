import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import AppText from "./Text";
import colors from "../utility/colors";
import cache from "../utility/cache";
import SentenceModal from "./SentenceModal";
import useTimer from "../hooks/useTimer";
import AppProgressBar from "./AppProgressBar";
import { useHideBottomTabBar } from "../hooks/useHideBottomTabBar";
import useGetSentenceQuizzes from "../hooks/useGetSentenceQuizzes";

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

const SentenceMaster = ({ route, navigation }) => {
  console.log("Sentence Master render");
  const [currectQuizIndex, setCurrectQuizIndex] = useState(0);
  const [currentWordPosition, setCurrentWordPosition] = useState(1);
  const [arrangedWords, setArrangedWords] = useState([]);
  const [words, setWords] = useState([]);
  const [currQuizId, setCurrQuizId] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);
  const {
    data: { level },
  } = route.params;

  // Hide Bottom tab navigation layout.
  useHideBottomTabBar();

  const { sentenceQuizzes, isQuizCompleted } = useGetSentenceQuizzes(level);

  const handleTimerComplete = () => {
    openModal();
  };

  const { progress, startTimer, resetTimer, stopTimer, timeLeft } = useTimer(
    60,
    handleTimerComplete
  );

  useFocusEffect(
    React.useCallback(() => {
      startTimer();
      //   resetTimer();
      console.log("SentenceMaster focused");

      return () => {
        stopTimer();
        // console.log("Timer stopped!");
        console.log("SentenceMaster removed");
      };
    }, [])
  );

  useEffect(() => {
    console.log({ isQuizCompleted, x: sentenceQuizzes.length });
    if (isQuizCompleted && sentenceQuizzes.length == 0) {
      Alert.alert("Congratulations! You completed all the quizzes!!");
      navigation.navigate("GameScreen");
    }

    if (currectQuizIndex < sentenceQuizzes?.length) {
      const sentence = sentenceQuizzes[currectQuizIndex];
      const shuffleWords = shuffleArray(sentence.words);

      setWords([...shuffleWords]);
      setCurrQuizId(sentence.id);
    }
  }, [currectQuizIndex, sentenceQuizzes.length]);

  useEffect(() => {
    if (words?.length == 0 && arrangedWords.length) {
      // show modal for retake or next quiz
      stopTimer();
      openModal();
      saveQuiz();
    }
  }, [words.length]);

  const saveQuiz = async () => {
    try {
      const existingData = await cache.getData("sentenceBuilder");

      let currentLevelData = existingData[level];

      console.log(" >>>>", JSON.stringify(existingData));

      if (currentLevelData) {
        let uniqueIds = new Set([
          ...currentLevelData.compltedQuizIds,
          currQuizId,
        ]);

        const updatedData = {
          ...currentLevelData,
          compltedQuizIds: [...uniqueIds],
        };

        existingData[level] = updatedData;
        await cache.storeData("sentenceBuilder", existingData);
        console.log("Saved sentence builder quiz");
      }
    } catch (error) {
      console.log("Error while saving sentence builder quiz", error);
    }
  };

  const moveToNextSentence = () => {
    if (currectQuizIndex < sentenceQuizzes?.length) {
      setCurrentWordPosition(1);
      setArrangedWords([]);
      setCurrectQuizIndex((prev) => prev + 1);
      closeModal();
      resetTimer();
      setCurrQuizId(null);
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentWordPosition(1);
    setCurrectQuizIndex((prev) => prev);
    const sentence = sentenceQuizzes[currectQuizIndex];
    // shuffle words
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
    <View style={styles.container}>
      <View style={styles.output}>
        {arrangedWords.map((word) => (
          <View key={word.id} style={styles.chipContainer}>
            <AppText style={styles.wordChip}>{word.text}</AppText>
          </View>
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
            style={styles.chipContainer}
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
        level={level}
      />
      {/* Sentence Modal */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    alignItems: "center",
    alignContent: "center",
    // backgroundColor: colors.gray3,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 14,
    // padding: 10,
  },
  output: {
    // backgroundColor: colors.gray2,
    alignItems: "center",
    alignContent: "center",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 14,
    padding: 10,
  },
  progressContainer: {
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  chipContainer: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
    elevation: 3,
    padding: 12,
    // paddingHorizontal: 20,
    gap: 20,
  },
  wordChip: {
    color: colors.white,
    fontSize: 24,
    color: colors.black,
  },
});

export default SentenceMaster;
