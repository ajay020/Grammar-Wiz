import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View, ActivityIndicator } from "react-native";
import { moderateScale } from "react-native-size-matters";

import topicData from "../database/grammer/topics";
import TopicListItem2 from "../components/TopicListItem2";
import cache from "../utility/cache";
import useQuizData from "../hooks/useQuizData";

export default HomeScreen = ({ navigation }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function clearCache() {
      await cache.clearAll();
    }
    // clearCache();
  }, []);

  const { completedQuizzes, loading, fetchCompletdQuizzes } = useQuizData();

  function calcualteCompletedQuiz() {
    // console.log({ completedQuizzes });
    let data = topicData.topics.map((topic) => {
      const quizCount = completedQuizzes.filter(
        (cq) => cq.topicId === topic.id
      ).length;
      return { ...topic, quizCompletedCount: quizCount };
    });
    // console.log({ data });
    setTopics([...data]);
  }

  useEffect(() => {
    calcualteCompletedQuiz();
  }, [loading]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // Screen has gained focus, fetch or update data here
      fetchCompletdQuizzes();
    });

    // Clean up the listener when component unmounts
    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      {loading && <ActivityIndicator color={"blue"} />}
      <FlatList
        style={styles.container}
        data={topics}
        numColumns={1}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={({ item }) => <TopicListItem2 item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(20),
    // paddingVertical: 8,
    marginBottom: moderateScale(4),
  },
});
