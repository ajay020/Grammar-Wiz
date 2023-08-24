import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "../components/Text";

const ProgressScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Progress Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProgressScreen;
