import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import data from "../utility/data";
import ListItemSeprator from "../components/ListItemSeprator";
import TopicListItem from "../components/home/TopicListItem";
import cache from "../utility/cache";

export default HomeScreen = () => {
  const [topics, setTopics] = useState([...data.topics]);
  const [selectedTopic, setSelectedTopic] = useState(null);

  console.log("HomeScreen render");

  const completedQuizzes = async () => {
    await cache.clearAll();
  };

  useEffect(() => {
    // completedQuizzes();
  }, []);

  return (
    <FlatList
      data={topics}
      ItemSeparatorComponent={ListItemSeprator}
      keyExtractor={(item) => item.id?.toString()}
      renderItem={({ item }) => (
        <TopicListItem
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
          topic={item}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});
