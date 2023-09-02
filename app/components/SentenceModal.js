import React, { useState } from "react";
import { Modal, View, StyleSheet, TouchableOpacity, Text } from "react-native";

import colors from "../utility/colors";
import Icon from "./Icon";

const SentenceModal = ({
  words,
  handleRetakeQuiz,
  modalVisible,
  moveToNextSentence,
  timeLeft,
}) => {
  let arrangedSentence = words?.reduce(
    (acc, word) => acc + " " + word.text,
    ""
  );

  let timeTaken = 60 - timeLeft;

  let star1 = "star-outline";
  let star2 = "star-outline";
  let star3 = "star-outline";
  let color1 = colors.gray4;
  let color2 = colors.gray4;
  let color3 = colors.gray4;

  if (timeTaken < 12) {
    star1 = "star";
    star2 = "star";
    star3 = "star";

    color1 = colors.golden;
    color2 = colors.golden;
    color3 = colors.golden;
  } else if (timeTaken >= 12 && timeTaken < 25) {
    star1 = "star";
    star2 = "star";

    color1 = colors.golden;
    color2 = colors.golden;
  } else if (timeTaken >= 25 && timeTaken < 60) {
    star1 = "star";
    color1 = colors.golden;
  }

  return (
    <Modal visible={modalVisible} animationType="slide" transparent={false}>
      <View style={styles.modalContainer}>
        {timeTaken >= 60 ? (
          <Text style={styles.ansTxt}> Try again </Text>
        ) : (
          <Text style={styles.ansTxt}>{arrangedSentence}</Text>
        )}

        <View style={styles.performance}>
          <View style={styles.ratingContainer}>
            <Icon name={star1} size={90} color={color1} />
            <Icon name={star2} size={90} color={color2} />
            <Icon name={star3} size={90} color={color3} />
          </View>

          <View style={styles.timeContainer}>
            <Icon name={"clock-outline"} color={colors.white} />
            <Text style={styles.timeTaken}>{60 - timeLeft} seconds</Text>
          </View>
        </View>

        <View style={styles.actionContainer}>
          <TouchableOpacity onPress={handleRetakeQuiz}>
            <Icon name={"reload"} size={40} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity onPress={moveToNextSentence}>
            <Icon name={"arrow-right"} size={40} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    // backgroundColor: "gray",
    flexDirection: "row",
    justifyContent: "center",
    gap: 40,
    width: 200,
  },
  ansTxt: {
    fontSize: 50,
    color: colors.white,
    textAlign: "center",
  },
  modalContainer: {
    alignItems: "center",
    backgroundColor: colors.gray2,
    flex: 1,
    justifyContent: "space-around",
    padding: 8,
  },
  performance: {
    // backgroundColor: colors.gray2,
    gap: 20,
    alignItems: "center",
  },
  ratingContainer: {
    // backgroundColor: "brown",
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },
  timeTaken: {
    fontSize: 28,
    color: colors.white,
    textAlign: "center",
  },
  timeContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
});

export default SentenceModal;
