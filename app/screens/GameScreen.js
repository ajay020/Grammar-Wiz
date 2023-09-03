import React from "react";
import { View, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import colors from "../utility/colors";
import Text from "../components/Text";

const GameScreen = ({ navigation }) => {
  useFocusEffect(
    React.useCallback(() => {
      navigation.navigate("GameScreen");
      console.log("GameScreen FOCUSED");

      return () => {
        console.log("GameScreen UNFOCUSED");
      };
    }, [])
  );

  const sendDataToSentenceMaster = (level) => {
    const data = {
      level,
    };
    // Navigate to SentenceMaster and pass the data
    navigation.navigate("SentenceMaster", { data: data });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => sendDataToSentenceMaster(1)}>
        <View style={styles.tile}>
          <Text style={styles.title}>Beginner</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => sendDataToSentenceMaster(2)}>
        <View style={styles.tile}>
          <Text style={styles.title}>Intermediate</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => sendDataToSentenceMaster(3)}>
        <View style={styles.tile}>
          <Text style={styles.title}>Advanced</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    padding: 12,
    backgroundColor: colors.gray2,
  },
  tile: {
    backgroundColor: colors.gray3,
    paddingVertical: 50,
    paddingVertical: 40,
    borderRadius: 10,
    marginVertical: 6,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    color: colors.white,
  },
});

export default GameScreen;
