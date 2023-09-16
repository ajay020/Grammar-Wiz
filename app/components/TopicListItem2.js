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

  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={goToQuizList}
        style={styles.container}
      >
        <Text style={styles.text}> {item?.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 20,
    marginVertical: 4,
    flex: 1,
    elevation: 5,
    width: "100%",
  },
  outerContainer: {
    paddingHorizontal: 10,
  },
  text: {
    color: colors.black,
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
  },
});

export default TopicListItem2;
