import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

import QuizScreen from "../screens/QuizScreen";
import HomeScreen from "../screens/HomeScreen";
import QuizListScreen from "../screens/QuizListScreen";
import MoreButton from "../components/MoreButton";
import AboutScreen from "../screens/AboutScreen";
import ThemeToggleButton from "../theme/ThemeToggleButton";
import { useTheme } from "../theme/ThemeContext";
import { darkTheme, lightTheme } from "../utility/theme";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <Stack.Navigator screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: isDark ? darkTheme.background : lightTheme.background, 
        },
        headerTintColor:isDark ? darkTheme.text : lightTheme.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: true,
            headerTitleAlign: "left",
            headerTitle: "Grammer Wiz",
            headerRight: () => {
              return <View style={{
                flexDirection: "row",
                alignItems: "center"
              }}>
                <ThemeToggleButton />
                <MoreButton />
              </View>;
            },
          }}
        />
        <Stack.Screen name="quizList" component={QuizListScreen} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </>
  );
};

export default HomeNavigator;
