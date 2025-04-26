import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Touchable, TouchableOpacity } from "react-native";
import { ThemedText, ThemedTouchableOpacity, ThemedView } from "../themedComponents/ThemedText";

const GameListScreen = () => {
  const navigation = useNavigation();

  return (
    <ThemedView style={styles.container}>
      <ThemedTouchableOpacity
        style={styles.tile}
        onPress={() => navigation.navigate("SentenceBuilder")}
      >
        <ThemedText style={styles.title}>Sentence Builder</ThemedText>
      </ThemedTouchableOpacity>
      <ThemedTouchableOpacity
        style={styles.tile}
        onPress={() => navigation.navigate("MatchingQuiz")}
      >
        <ThemedText style={styles.title}>Matching Quiz</ThemedText>
      </ThemedTouchableOpacity>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tile: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});


export default GameListScreen;