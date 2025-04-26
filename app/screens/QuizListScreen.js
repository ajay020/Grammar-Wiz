import React, { useCallback, useState } from "react";
import { View, StyleSheet, TouchableOpacity, BackHandler } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import useQuizData from "../hooks/useQuizData";
import colors from "../utility/colors";
import Text from "../components/Text";
import Icon from "../components/Icon";
import CheckIcon from "../components/CheckIcon";
import { useHideBottomTabBar } from "../hooks/useHideBottomTabBar";
import TopicSummary from "../components/TopicSummary";
import { ThemedText, ThemedView } from "../themedComponents/ThemedText";
import { useTheme } from "../theme/ThemeContext";
import { darkTheme, lightTheme } from "../utility/theme";

const QuizListScreen = ({ route }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { completedQuizzes, fetchCompletdQuizzes } = useQuizData();
  const navigation = useNavigation();

  const { theme } = useTheme()
  const isDark = theme === 'dark';

  const { id: topicId, quizzes: quizIds, title } = route?.params?.data;

  // Check if all quizzes have been completed
  const allQuizzesCompleted = quizIds.every((quizId) => {
    // Check if there is a completed quiz with the same quizId
    return completedQuizzes.some(
      (completedQuiz) => completedQuiz.quizId === quizId
    );
  });

  // Set navigation headr title
  React.useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, [navigation, route]);

  const navigateToQuizScreen = (quizId) => {
    navigation.addListener("focus", () => {
      fetchCompletdQuizzes();
    });
    navigation.navigate("QuizScreen", {
      quizId,
      topicId,
      title,
    });
  };

  useFocusEffect(
    useCallback(() => {

      const onBackPress = () => {
        navigation.goBack();
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };

    }, [navigation])
  )

  const toggleModal = useCallback(() => {
    setModalVisible(!isModalVisible);
  }, [isModalVisible]);

  return (
    <>
      <TouchableOpacity
        style={{
          alignItems: "center",
          backgroundColor: isDark ? darkTheme.background : lightTheme.background,
          paddingVertical: moderateScale(18),
        }}
        onPress={toggleModal}
      >
        <ThemedView
          style={{
            backgroundColor: isDark ? darkTheme.card : lightTheme.card,
            padding: 4,
            paddingHorizontal: moderateScale(16),
            borderRadius: 4,
            elevation: 2,
            alignItems: "center",
          }}
        >
          <Icon
            color={isDark ? lightTheme.background : darkTheme.background}
            name={"book-open-outline"}
            size={60}
          />
          <ThemedText>Study</ThemedText>
        </ThemedView>
        <TopicSummary
          topicId={topicId}
          isVisible={isModalVisible}
          onClose={toggleModal}
        />
      </TouchableOpacity>
      <ThemedView style={styles.container}>
        {quizIds.map((quizId, index) => {

          let isQuizTaken = completedQuizzes.find(
            (quiz) => quiz.quizId === quizId
          );

          return (
            <TouchableOpacity
              key={quizId}
              activeOpacity={0.3}
              style={ [styles.quizItem, {  backgroundColor: isDark ? darkTheme.card : lightTheme.card}] }
              onPress={() => navigateToQuizScreen(quizId)}
            >
              <ThemedText> Quiz {index + 1}</ThemedText>

              {isQuizTaken ? <CheckIcon /> : null}
            </TouchableOpacity>
          );
        })}
        <ThemedView style={[styles.trophyContainer]}>
          {allQuizzesCompleted && (
            <Icon
              name={"trophy-outline"}
              color={`${allQuizzesCompleted ? colors.golden : "gray"}`}
              size={60}
            />
          )}
        </ThemedView>
      </ThemedView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: moderateScale(8, 0.5),
    alignItems: "center",
    paddingHorizontal: moderateScale(16),
    // backgroundColor: "gray",
  },
  checkBox: {
    width: scale(24),
    height: scale(24),
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: scale(12),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "dodgerblue",
  },
  quizItem: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: scale(10),
    elevation: scale(2),
    paddingVertical: moderateScale(16),
    paddingHorizontal: moderateScale(8),
    marginVertical: verticalScale(2),
    width: "90%",
    // backgroundColor :"green"
  },
  trophyContainer: {
    alignItems: "center",
    padding: scale(12),
  },
});

export default QuizListScreen;
