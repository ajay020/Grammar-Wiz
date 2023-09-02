import React, { useRef } from "react";
import { Animated, View, StyleSheet } from "react-native";
import colors from "../utility/colors";

const AppProgressBar = ({
  progress = 0,
  backgroundColor = colors.primary,
  height = 16,
  style,
  range = 1,
  duration = 400,
}) => {
  const animatedWidth = useRef(new Animated.Value(progress)).current;

  // Update animation when progress changes
  Animated.timing(animatedWidth, {
    toValue: progress,
    duration, // Duration of the animation in milliseconds
    useNativeDriver: false, // Set to true for better performance (requires Animated.View)
  }).start();

  const animatedStyles = {
    width: animatedWidth.interpolate({
      inputRange: [0, range],
      outputRange: ["0%", "100%"],
    }),
  };

  return (
    <View style={[styles.progressBar, { height }, style]}>
      <Animated.View
        style={[styles.progressTrack, animatedStyles, { backgroundColor }]}
      ></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    height: 16,
    width: "100%",
    backgroundColor: colors.gray1,
    borderRadius: 10,
    overflow: "hidden",
  },
  progressTrack: {
    height: "100%",
    backgroundColor: colors.primary,
  },
});

export default AppProgressBar;
