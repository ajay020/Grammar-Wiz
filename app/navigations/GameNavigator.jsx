
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SentenceBuilder from '../screens/SentenceBuilderScreen';
import MatchingQuiz from '../components/MatchingQuiz';
import GameListScreen from '../screens/GameListScreen';
import SentenceMaster from '../components/SentenceMaster';

const Stack = createStackNavigator();

const GameNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="GameList"
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
            }}
        >
            <Stack.Screen
                name="GameList"
                component={GameListScreen}
                options={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerTitle: "Let's Play",
                }}
            />
            <Stack.Screen name="SentenceBuilder" component={SentenceBuilder} />
            <Stack.Screen name="SentenceMaster" component={SentenceMaster} />
            <Stack.Screen name="MatchingQuiz" component={MatchingQuiz} />
        </Stack.Navigator>
    );
}

export default GameNavigator;