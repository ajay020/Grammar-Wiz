import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import QuizScreen from "../screens/QuizScreen";
import HomeScreen from "../screens/HomeScreen";
import QuizListScreen from "../screens/QuizListScreen";
import ShareButton from "../components/ShareButton";

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
            // headerRight: () => {
            //   return <ShareButton />;
            // },
          }}
        />
        <Stack.Screen name="quizList" component={QuizListScreen} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
      </Stack.Navigator>
    </>
  );
};

export default HomeNavigator;
