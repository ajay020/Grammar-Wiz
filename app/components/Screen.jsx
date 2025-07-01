import React from "react";
import { StatusBar, StyleSheet, Platform, SafeAreaView } from "react-native";

const Screen = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : "auto",
    // backgroundColor: "yellow",
  },
});

export default Screen;
