import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import HomeNavigator from "./app/navigations/HomeNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <HomeNavigator />
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
