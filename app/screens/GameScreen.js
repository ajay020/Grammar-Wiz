import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "../components/Text";
import Icon from "../components/Icon";

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Game Screen</Text>
      <Icon name={"home"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default GameScreen;
