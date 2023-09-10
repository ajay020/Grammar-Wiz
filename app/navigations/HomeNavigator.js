import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import QuizScreen from "../screens/QuizScreen";
import HomeScreen from "../screens/HomeScreen";
import colors from "../utility/colors";
import QuizListScreen from "../screens/QuizListScreen";

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
            headerTitleAlign: "center",
            headerTitle: "English Grammer",
            headerStyle: {
              backgroundColor: colors.gray1,
            },
            headerTitleStyle: {
              color: colors.white,
            },
          }}
        />
        <Stack.Screen name="quizList" component={QuizListScreen} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
      </Stack.Navigator>
    </>
  );
};

export default HomeNavigator;
