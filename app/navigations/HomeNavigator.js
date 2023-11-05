import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import QuizScreen from "../screens/QuizScreen";
import HomeScreen from "../screens/HomeScreen";
import QuizListScreen from "../screens/QuizListScreen";
import MoreButton from "../components/MoreButton";
import AboutScreen from "../screens/AboutScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: true,
            headerTitleAlign: "left",
            headerTitle: "English Grammer Wiz",
            headerRight: () => {
              return <MoreButton />;
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
