import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Text from "./Text";
import colors from "../utility/colors";
import CheckIcon from "./CheckIcon";

const TopicListItem2 = ({ item }) => {
  const navigation = useNavigation();

  const isAllQuizCompleted = item.quizzes.length === item.quizCompletedCount;

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
        <Text style={styles.text}>
          {item?.title} ({item.quizCompletedCount}/{item?.quizzes?.length})
        </Text>
        {isAllQuizCompleted && <CheckIcon />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginVertical: 4,

    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 5,
    width: "100%",
  },
  outerContainer: {
    paddingHorizontal: 2,
  },
  text: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
  },
});

export default TopicListItem2;
