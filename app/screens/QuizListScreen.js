import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import useQuizData from "../hooks/useQuizData";
import QuizIcon from "../components/QuizIcon";
import colors from "../utility/colors";
import { useNavigation } from "@react-navigation/native";
import Text from "../components/Text";
import Icon from "../components/Icon";
import CheckIcon from "../components/CheckIcon";

const QuizListScreen = ({ route }) => {
  const { completedQuizzes, fetchCompletdQuizzes } = useQuizData();

  const { id: topicId, quizzes: quizIds, title } = route?.params?.data;
  const navigation = useNavigation();

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

  return (
    <View style={styles.container}>
      {quizIds.map((quizId, index) => (
        <TouchableOpacity
          key={quizId}
          activeOpacity={0.3}
          style={styles.quizItem}
          onPress={() => navigateToQuizScreen(quizId)}
        >
          <Text> Quiz {index + 1}</Text>
          <CheckIcon />
        </TouchableOpacity>
      ))}
      <View style={styles.trophyContainer}>
        <Icon name={"trophy"} color="gray" size={40} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    padding: 16,
    alignItems: "center",
    // justifyContent: "center",
  },
  checkBox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "dodgerblue",
  },
  quizItem: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    borderRadius: 12,
    elevation: 5,
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 10,
    width: "100%",
  },
  trophyContainer: {
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 35,
    borderColor: colors.gray4,
    width: 70,
    height: 70,
    padding: 12,
  },
});

export default QuizListScreen;
