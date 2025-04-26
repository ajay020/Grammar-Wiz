import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useTheme } from "../theme/ThemeContext";
import { darkTheme, lightTheme } from '../utility/theme';
import HomeNavigator from './HomeNavigator';
import GameNavigator from './GameNavigator';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    backgroundColor: isDark ? darkTheme.background : lightTheme.background,
                },
                tabBarActiveTintColor: isDark ? '#fff' : '#000',
                tabBarInactiveTintColor: isDark ? '#888' : '#888',
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Quiz') {
                        iconName = 'book-open-page-variant';
                    } else if (route.name === 'Game') {
                        iconName = 'gamepad-variant';
                    }

                    return (
                        <MaterialCommunityIcons name={iconName} color={color} size={size} />
                    );
                },
            })}
        >
            <Tab.Screen
                name="Quiz"
                component={HomeNavigator}
                options={{ tabBarLabel: 'Quiz' }}
            />
            <Tab.Screen
                name="Game"
                component={GameNavigator}
                options={{ tabBarLabel: 'Game' }}
            />
        </Tab.Navigator>
    );
};
export default MainTabs