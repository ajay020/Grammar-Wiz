import React, { useEffect, useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";

import cache from "../utility/cache";
import colors from "../utility/colors";
import data from "../utility/data";
import Text from "../components/Text";
import AppProgressBar from "../components/AppProgressBar";
import { useNavigation } from "@react-navigation/native";
import useQuizData from "../components/hooks/useQuizData";

const ProgressScreen = () => {
  const topics = data?.topics;
  const [progressDataList, setProgressDataList] = useState([]);

  const navigation = useNavigation();

  const fetchCompletdQuizzes = async () => {
    try {
      let savedQuizDataList = await cache.getData("completedQuizzes");
      //   console.log(list);
      calculateProgressData(savedQuizDataList);
      //   setCompletedQuizzes([...list]);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  const calculateProgressData = (savedQuizDataList) => {
    let progressData = [];
    topics?.forEach((topic) => {
      let currentTopicQuizzs = savedQuizDataList?.filter((q) => {
        if (q.topicId === topic.id) {
          return q;
        }
      });

      //   console.log({ currentTopicQuizzs });

      let correctQuestions = 0;
      let totalQuestions = 0;

      topic?.quizzes?.forEach((quizId) => {
        totalQuestions += data?.getQuizById(quizId)?.questions?.length || 0;
      });

      if (currentTopicQuizzs?.length > 0) {
        currentTopicQuizzs.forEach(
          (quiz) => (correctQuestions += quiz?.correct)
        );
        // console.log({ currentTopicQuizzs });
        progressData.push({
          title: topic.title,
          correctQuestions,
          totalQuestions,
        });
      } else {
        progressData.push({
          title: topic.title,
          correctQuestions: 0,
          totalQuestions: 0,
        });
      }
    });

    setProgressDataList(progressData);
    // console.log({ progressData });
  };

  const cb = () => {
    console.log("PROGRESS FOCUSED");
    fetchCompletdQuizzes();
  };

  useEffect(() => {
    navigation.addListener("focus", cb);
    return () => {
      navigation.removeListener("focus", cb);
    };
  }, []);

  return (
    <View style={styles.container}>
      {progressDataList.map((d) => {
        return (
          <View key={d.title} style={styles.tile}>
            <Text style={styles.title}>{d.title}</Text>
            <AppProgressBar
              progress={
                isNaN(d.correctQuestions / d.totalQuestions)
                  ? 0
                  : d.correctQuestions / d.totalQuestions
              }
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray2,
    paddingTop: StatusBar.currentHeight,
    padding: 22,
  },
  tile: {
    // borderWidth: 1,
    marginVertical: 6,
    padding: 6,
    // borderColor: colors.white,
  },
  title: {
    color: colors.white,
    fontSize: 24,
    marginBottom: 8,
  },
  progressBar: {
    backgroundColor: colors.gray1,
  },
});

export default ProgressScreen;
