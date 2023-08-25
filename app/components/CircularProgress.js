import React from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";

const CircularProgress = ({ radius = 40, strokeWidth = 4, progress = 30 }) => {
  const center = radius + strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressValue = (circumference * progress) / 100;

  return (
    <View>
      <Svg width={radius * 2 + strokeWidth} height={radius * 2 + strokeWidth}>
        <Circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#E0E0E0" // Background color
          strokeWidth={strokeWidth}
        />
        <Circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#00C853" // Progress color
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progressValue}
        />
      </Svg>
    </View>
  );
};

export default CircularProgress;
