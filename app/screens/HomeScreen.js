import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import data from "../utility/data";
import ListItemSeprator from "../components/ListItemSeprator";
import TopicListItem from "../components/home/TopicListItem";

export default HomeScreen = () => {
  const [topics, setTopics] = useState([...data.topics]);
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <View>
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
    </View>
  );
};

const styles = StyleSheet.create({});
