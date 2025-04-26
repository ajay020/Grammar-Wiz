import { Text, View } from "react-native";
import { useTheme } from "../theme/ThemeContext";
import { darkTheme, lightTheme } from "../utility/theme";

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