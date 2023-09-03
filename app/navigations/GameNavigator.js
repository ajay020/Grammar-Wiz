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
      <Stack.Screen name="GameScreen" component={GameScreen} />
      <Stack.Screen name="SentenceMaster" component={SentenceMaster} />
    </Stack.Navigator>
  );
};

export default GameNavigator;
