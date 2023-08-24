import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import QuizScreen from "../screens/QuizScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="QuizScreen" component={QuizScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
