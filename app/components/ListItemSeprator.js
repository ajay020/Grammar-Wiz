import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../utility/colors";

const ListItemSeprator = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: colors.gray4,
  },
});

export default ListItemSeprator;
