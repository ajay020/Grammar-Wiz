import { StyleSheet } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import Screen from "./components/Screen";

export default function App() {
  return (
    <Screen>
      <HomeScreen />
    </Screen>
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
