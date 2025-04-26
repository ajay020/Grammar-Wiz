import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import CheckIcon from "./CheckIcon";
import { useTheme } from "../theme/ThemeContext";
import { darkTheme, lightTheme } from "../utility/theme";
import { ThemedText, ThemedView } from "../themedComponents/ThemedText";

const TopicListItem2 = ({ item }) => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const isAllQuizCompleted = item.quizzes.length === item.quizCompletedCount;

  const goToQuizList = () => {
    navigation.navigate("quizList", { data: item });
  };

  return (
    <ThemedView style={styles.outerContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={goToQuizList}
        style={[styles.container, { backgroundColor: isDark ? darkTheme.card : lightTheme.card}]}
      >
        <ThemedText style={styles.text}>
          {item?.title} ({item.quizCompletedCount}/{item?.quizzes?.length})
        </ThemedText>
        {isAllQuizCompleted && <CheckIcon />}
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
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
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
  },
});

export default TopicListItem2;
