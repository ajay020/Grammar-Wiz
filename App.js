import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import HomeNavigator from "./app/navigations/HomeNavigator";
import MatchingQuiz from "./app/components/MatchingQuiz";

export default function App() {
  return (
    <NavigationContainer>
      <HomeNavigator />
      {/* <MatchingQuiz /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
