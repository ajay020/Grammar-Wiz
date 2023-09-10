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
      <TouchableOpacity
        style={styles.tile}
        onPress={() => sendDataToSentenceMaster(1)}
      >
        <Text style={styles.title}>Beginner</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tile}
        onPress={() => sendDataToSentenceMaster(2)}
      >
        <Text style={styles.title}>Intermediate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tile}
        onPress={() => sendDataToSentenceMaster(3)}
      >
        <Text style={styles.title}>Expert</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  tile: {
    backgroundColor: colors.white,
    paddingVertical: 20,
    borderRadius: 10,
    elevation: 5,
    marginVertical: 6,
    width: "90%",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    color: colors.black,
  },
});

export default GameScreen;
