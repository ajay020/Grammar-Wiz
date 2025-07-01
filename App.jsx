import { NavigationContainer } from "@react-navigation/native";

import HomeNavigator from "./app/navigations/HomeNavigator";
import MatchingQuiz from "./app/components/MatchingQuiz";
import { ThemeProvider } from "./app/theme/ThemeContext";
import MainTabs from "./app/navigations/Maintab";

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
       <MainTabs />
      </NavigationContainer>
    </ThemeProvider>
  );
}


