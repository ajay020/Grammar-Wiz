import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { moderateScale } from "react-native-size-matters";
import Icon from "./Icon";

const InfoPopUp = ({ onClick }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.modal}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => {
          navigation.navigate("About");
          onClick();
        }}
      >
        <Icon name={"information"} size={18} />
        <Text style={styles.text}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => {
          navigation.navigate("About");
          onClick();
        }}
      >
        <Icon name={"shield"} size={18} />
        <Text style={styles.text}>Privacy Policy</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    top: moderateScale(35),
    right: moderateScale(1),
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    elevation: 5,
    padding: 4,
    justifyContent: "center",
  },
  text: {
    // backgroundColor: "gray",
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(4),
    textAlign: "center",
    fontSize: moderateScale(16),
  },
  box: {
    borderWidth: 0,
    width: "100%",
    paddingVertical: moderateScale(4),
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    gap: 8,
  },
});

export default InfoPopUp;
