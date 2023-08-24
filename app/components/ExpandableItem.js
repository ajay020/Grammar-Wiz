import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import colors from "../utility/colors";
import QuizIcon from "../components/QuizIcon";
import cache from "../utility/cache";

const ExpandableItem = ({ topic }) => {
  const navigation = useNavigation();
  const [completedQuizzes, setCompletedQuizzes] = useState([]);

  console.log("ExpandableItem render");

  const fetchCompletdQuizzes = async () => {
    try {
      let list = await cache.getData("completedQuizzes");
      setCompletedQuizzes([...list]);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchCompletdQuizzes();
  }, []);

  return (
    <View style={styles.container}>
      {topic?.quizzes.map((quizId) => (
        <TouchableOpacity
          key={quizId}
          activeOpacity={0.3}
          onPress={() => {
            navigation.addListener("focus", () => {
              console.log("BE FOCUSED");
              fetchCompletdQuizzes();
            });
            navigation.navigate("QuizScreen", { quizId, topicId: topic?.id });
          }}
        >
          <QuizIcon
            completed={completedQuizzes.find(
              (quiz) => quiz.quizId == quizId && topic.id === quiz.topicId
            )}
            quizId={quizId}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.gray2,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 24,
    gap: 24,
  },
  image: {},
});

export default ExpandableItem;
