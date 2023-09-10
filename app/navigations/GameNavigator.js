import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import GameScreen from "../screens/GameScreen";
import SentenceMaster from "../components/SentenceMaster";

const Stack = createStackNavigator();

const GameNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="GameScreen"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen
        name="GameScreen"
        component={GameScreen}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitle: "Sentence Builder",
        }}
      />
      <Stack.Screen name="SentenceMaster" component={SentenceMaster} />
    </Stack.Navigator>
  );
};

export default GameNavigator;
