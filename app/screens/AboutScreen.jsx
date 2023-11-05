import React from "react";
import { View, Text, useWindowDimensions } from "react-native";
import RenderHTML from "react-native-render-html";
import { aboutText } from "../database/aboutData";

const AboutScreen = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ padding: 16, backgroundColor: "white", margin: 16 }}>
      <RenderHTML source={{ html: aboutText }} contentWidth={width} />
    </View>
  );
};

export default AboutScreen;
