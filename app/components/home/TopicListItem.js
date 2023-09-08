import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../../utility/colors.js";
import ExpandableItem from "../ExpandableItem.js";
import Text from "../Text";

const TopicListItem = ({ selectedTopic, setSelectedTopic, topic }) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          setSelectedTopic((preTopic) => {
            if (preTopic?.id == topic?.id) {
              return null;
            }
            return topic;
          });
        }}
      >
        <View style={styles.container}>
          <Text style={styles.text}>{topic.title}</Text>
          <MaterialCommunityIcons
            name={`chevron-${selectedTopic?.id == topic.id ? "up" : "down"}`}
            size={35}
            color={colors.white}
          />
        </View>
      </TouchableOpacity>
      {selectedTopic?.id === topic.id && <ExpandableItem topic={topic} />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
  },
  text: {
    fontSize: 20,
    color: colors.white,
  },
});

export default TopicListItem;
