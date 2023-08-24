import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProgressScreen from "./ProgressScreen";
import GameScreen from "./GameScreen";
import Icon from "../components/Icon";
import colors from "../utility/colors";
import HomeNavigator from "../navigations/HomeNavigator";
import HomeScreen from "./HomeScreen";

const Tab = createBottomTabNavigator();

function AppScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={"home"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Games"
        component={GameScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={"dumbbell"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Progress"
        component={ProgressScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={"finance"} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppScreen;
