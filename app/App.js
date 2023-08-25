import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import Screen from "./components/Screen";
import AppScreen from "./screens/AppScreen";
import Quiz from "./screens/QuizScreen";
import Result from "./components/Result";
import ProgressScreen from "./screens/ProgressScreen";

export default function App() {
  return (
    <NavigationContainer>
      <AppScreen />
      {/* <ProgressScreen /> */}
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
