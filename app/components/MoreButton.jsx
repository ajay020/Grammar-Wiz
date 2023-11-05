import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, BackHandler } from "react-native";

import Icon from "./Icon";
import InfoPopUp from "./InfoPopUp";

const MoreButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleBackButtonPress = () => {
    if (isOpen) {
      setIsOpen(false);
      return true;
    }
    return false;
  };

  BackHandler?.addEventListener("hardwareBackPress", handleBackButtonPress);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggle}>
        <Icon name={"dots-vertical"} size={28} />
      </TouchableOpacity>
      {isOpen && <InfoPopUp onClick={toggle} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  modalContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    // width: 200,
    right: 20,
    top: 20,
    position: "absolute",
    // height: 100,
    padding: 12,
  },
});

export default MoreButton;
