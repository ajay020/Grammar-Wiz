import { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import colors from "../utility/colors";
import Explanation from "./Explanation";
import CheckQuizButton from "./CheckQuizButton";

const FillInBlank = ({
  question,
  handleNextQeustion,
  incrementCorrectCount,
}) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [btnBgColor, setBtnBgColor] = useState(colors.gray3);
  const [isActive, setIsActive] = useState(false);

  const [inputValues, setInputValues] = useState(
    Array.from(question?.text.matchAll(/_+/g), () => "")
  );

  useEffect(() => {
    let isTyped = inputValues?.some((val) => val?.length > 0);
    if (isTyped) {
      setBtnBgColor(colors.primary);
      setIsActive(true);
    } else {
      setBtnBgColor(colors.gray3);
      setIsActive(false);
    }
  }, [inputValues]);

  const handleInputChange = (index, value) => {
    const updatedInputValues = [...inputValues];
    updatedInputValues[index] = value;
    setInputValues(updatedInputValues);
  };

  const breakTextLineIntoWord = (line) => {
    return line.split(" ").map((word, index) => (
      <Text key={`text-${index}`} style={styles.questionText}>
        {word}
      </Text>
    ));
  };

  const getQuestionText = useCallback(() => {
    // Split the question text into parts using '___' as the delimiter
    const parts = question.text.split(/_+/);

    const questionElements = [];

    parts.forEach((part, index) => {
      questionElements.push(breakTextLineIntoWord(part));

      if (index < parts.length - 1) {
        questionElements.push(
          <TextInput
            key={`input-${index}`}
            style={styles.input}
            placeholder="Your answer"
            value={inputValues[index]}
            editable={!isValidated}
            onChangeText={(text) => handleInputChange(index, text)}
          />
        );
      }
    });

    return <View style={styles.questionRow}>{questionElements}</View>;
  }, [inputValues, isValidated]);

  const handleCheckAnswer = () => {
    // Get the user's input from the input fields (assuming user inputs are stored in an array)
    const userAnswers = inputValues.map((input) =>
      input?.trim()?.toLowerCase()
    );

    const correctAnswers = question?.correctAnswers?.map((answer) =>
      answer?.trim()?.toLowerCase()
    );

    // Check if the user's answers match the correct answers
    const isCorrect = correctAnswers.every((correctAnser, index) => {
      return correctAnser === userAnswers[index];
    });

    return isCorrect;
  };

  const handleSubmit = () => {
    setIsValidated(true);

    const isRight = handleCheckAnswer();

    if (isRight) {
      setIsCorrect(true);
      setBtnBgColor(colors.primary);
      incrementCorrectCount();
    } else {
      setIsCorrect(false);
      setBtnBgColor(colors.danger);
    }
  };

  const handleNext = () => {
    setIsValidated(false);
    setIsCorrect(false);
    setBtnBgColor(colors.gray3);
    setInputValues([]);

    handleNextQeustion();
  };

  const handlePress = () => {
    if (isValidated) {
      handleNext();
    } else {
      handleSubmit();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        // backgroundColor: "lightyellow",
        paddingVertical: 20,
        paddingHorizontal: 8,
        height: "100%",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.questionContainer}>{getQuestionText()}</View>
        </View>
      </TouchableWithoutFeedback>
      <View
        style={[
          styles.footer,
          isValidated && { backgroundColor: "white", elevation: 5 },
        ]}
      >
        {isValidated && (
          <Explanation
            isCorrect={isCorrect}
            explanation={question?.explanation}
          />
        )}
        <CheckQuizButton
          onPress={handlePress}
          isCorrect={isCorrect}
          isSelected={isActive}
          isValidatedOption={isValidated}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    paddingVertical: scale(12),
    // backgroundColor: colors.gray3,
  },
  footer: {
    paddingHorizontal: 10,
    paddingBottom: 12,
    // position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    gap: 20,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    gap: scale(30),
    // backgroundColor: "blue",
  },

  questionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: moderateScale(10, 0.4),
    // justifyContent: "space-between",
    // backgroundColor: colors.gray5,
  },
  questionText: {
    color: colors.black,
    fontSize: moderateScale(18, 0.4),
    fontWeight: "400",
    lineHeight: moderateScale(30),
    letterSpacing: 0.5,
    marginRight: moderateScale(4, 0.4),
    // backgroundColor: "lightblue",
  },
  input: {
    // width: moderateScale(100, 0.5),
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    color: "blue",
    fontSize: moderateScale(18, 0.4),
    marginHorizontal: scale(4),
    // backgroundColor: "dodgerblue",
  },
});

export default FillInBlank;
