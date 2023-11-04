import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import cache from "../utility/cache";
import topicData from "../database/grammer/topics";
import TopicListItem2 from "../components/TopicListItem2";
import { scale, moderateScale } from "react-native-size-matters";

export default HomeScreen = ({ navigation }) => {
  //   console.log("HomeScreen render");

  const clearCache = async () => {
    await cache.clearAll();
  };

  useEffect(() => {
    // setTopics(topicData.topics);
    // clearCache();
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={topicData.topics}
      numColumns={1}
      keyExtractor={(item) => item.id?.toString()}
      renderItem={({ item }) => <TopicListItem2 item={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(20),
    // paddingVertical: 8,
    marginBottom: moderateScale(4),
  },
});
