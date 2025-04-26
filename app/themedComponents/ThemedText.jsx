import { Text, View, TouchableOpacity } from "react-native";
import { useTheme } from "../theme/ThemeContext";
import { darkTheme, lightTheme } from "../utility/theme";
import { Children } from "react";

export const ThemedText = ({ style, ...props }) => {
    const { theme } = useTheme();
    const isDark = theme == "dark"
    const color = isDark ? darkTheme.text : lightTheme.text

    return <Text style={[{ color }, style]} {...props} />;
};

export const ThemedView = ({ style, ...props }) => {
    const { theme } = useTheme();
    const isDark = theme == "dark"
    const bgColor = isDark ? darkTheme.background : lightTheme.background

    return <View style={[{ backgroundColor: bgColor }, style]} {...props} />;
};

export const ThemedTouchableOpacity = ({ style, ...props }) => {
    const { theme } = useTheme();
    const isDark = theme == "dark"
    const bgColor = isDark ? darkTheme.card : lightTheme.card

    return <TouchableOpacity style={[{ backgroundColor: bgColor }, style]} {...props} />;
};

export const ThemedCardView = ({ style, ...props }) => {
    const { theme } = useTheme();
    const isDark = theme == "dark"
    const bgColor = isDark ? darkTheme.card : lightTheme.card

    return <View style={[{ backgroundColor: bgColor }, style]} {...props} />;
};

export const AppButton = ({ style, ...props }) => {
    const { theme } = useTheme();
    const isDark = theme == "dark"
    const bgColor = isDark ? darkTheme.accent : lightTheme.accent

    return <TouchableOpacity style={[{ backgroundColor: bgColor }, style]} {...props} />;
};
