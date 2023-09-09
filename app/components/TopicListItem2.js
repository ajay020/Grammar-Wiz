import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Text from "./Text";
import colors from "../utility/colors";

const TopicListItem2 = ({ item }) => {
  const navigation = useNavigation();

  const goToQuizList = () => {
    navigation.navigate("quizList", { data: item });
  };

  console.log({ item });

  return (
    <TouchableOpacity onPress={goToQuizList} style={styles.container}>
      <Text style={styles.text}>{item?.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 18,
    paddingVertical: 20,
    margin: 4,
    flex: 1,
  },
  text: {
    color: colors.black,
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
  },
});

export default TopicListItem2;
