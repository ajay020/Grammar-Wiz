import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import QuestionOptions from "./QuestionOptions";
import CheckQuizButton from "./CheckQuizButton";
import Explanation from "./Explanation";
import { ThemedCardView, ThemedText } from "../themedComponents/ThemedText";

const SelectOptionQuiz = ({
  quizTitle,
  question,
  handleNextQeustion,
  incrementCorrectCount,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isValidatedOption, setIsValidatedOption] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

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

  const handleOptionSelect = (option) => {
    setIsSelected(true);
    if (!isValidatedOption) {
      if (typeof question.correctOptionId === "string") {
        setSelectedOptions([option]);
      } else {
        setSelectedOptions((prev) => toggleOption(prev, option));
      }
    }
  };

  function checkOptionsContainAnswers(chosenOptions, answers) {
    let answerIds;

    if (typeof answers === "string") {
      answerIds = [answers];
    } else {
      answerIds = [...answers];
    }

    // check if chosen options are correct or not
    return (
      chosenOptions.length === answerIds.length &&
      answerIds.every((answerId) => {
        let index = chosenOptions.findIndex(
          (option) => option?.id === answerId
        );
        if (index < 0) return false;
        return true;
      })
    );
  }

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

  const handleClick = () => {
    if (isValidatedOption) {
      setSelectedOptions([]);
      setIsValidatedOption(false);
      setIsCorrect(false);
      setIsSelected(false);

      handleNextQeustion();
    } else {
      handleOptionValidation();
    }
  };

  return (
    <View style={styles.container}>
      <ThemedText style={styles.quizTitle}>{quizTitle}</ThemedText>

      <QuestionOptions
        handleOptionSelect={handleOptionSelect}
        selectedOptions={selectedOptions}
        question={question}
        quizTitle={quizTitle}
      />
      <ThemedCardView
        style={[
          styles.footer,
          isValidatedOption && { elevation: 5 },
        ]}
      >
        {isValidatedOption && (
          <Explanation
            isCorrect={isCorrect}
            explanation={question?.explanation}
          />
        )}

        <CheckQuizButton
          onPress={handleClick}
          isCorrect={isCorrect}
          isSelected={isSelected}
          isValidatedOption={isValidatedOption}
        />
      </ThemedCardView>
    </View>
  );
};

export default SelectOptionQuiz;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "pink",
    height: "100%",
    width: "100%",
  },
  quizTitle: {
    fontSize: moderateScale(18),
    // textAlign: "center",
    marginVertical: verticalScale(10),
    marginTop: verticalScale(12),
  },
  footer: {
    paddingHorizontal: moderateScale(10),
    paddingBottom: moderateScale(12),
    position: "absolute",
    bottom: moderateScale(30),
    left: 0,
    right: 0,
    gap: 20,
    // backgroundColor: "yellow",
  },
});
