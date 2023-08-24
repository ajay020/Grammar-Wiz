import React, { useRef } from "react";
import { Animated, View, StyleSheet } from "react-native";

const AppProgressBar = ({ progress, height = 16 }) => {
  const animatedWidth = useRef(new Animated.Value(progress)).current;

  // Update animation when progress changes
  Animated.timing(animatedWidth, {
    toValue: progress,
    duration: 400, // Duration of the animation in milliseconds
    useNativeDriver: false, // Set to true for better performance (requires Animated.View)
  }).start();

  const animatedStyles = {
    width: animatedWidth.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
    }),
  };

  return (
    <View style={[styles.progressBar, { height }]}>
      <Animated.View
        style={[styles.progressTrack, animatedStyles]}
      ></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    height: 16,
    width: "100%",
    backgroundColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressTrack: {
    height: "100%",
    backgroundColor: "green",
  },
});

export default AppProgressBar;
