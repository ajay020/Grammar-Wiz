import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SentenceBuilder from '../screens/SentenceBuilderScreen';
import MatchingQuiz from '../components/MatchingQuiz';
import GameListScreen from '../screens/GameListScreen';
import SentenceMaster from '../components/SentenceMaster';
import { useTheme } from '../theme/ThemeContext';
import { darkTheme, lightTheme } from '../utility/theme';

const Stack = createStackNavigator();

const GameNavigator = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <Stack.Navigator
            initialRouteName="GameList"
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: isDark ? darkTheme.background : lightTheme.background,
                },
                headerTintColor: isDark ? darkTheme.text : lightTheme.text,
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