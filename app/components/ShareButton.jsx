import React from "react";
import { Share, View, StyleSheet } from "react-native";

import Icon from "./Icon";
import { TouchableOpacity } from "react-native-gesture-handler";

const ShareButton = () => {
  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: "Check out this awesome app!",
      });

      if (result.action === Share.sharedAction) {
        console.log(result.activityType);
        if (result.activityType) {
          // Shared via activity type (e.g., email, message)
          console.log(`Shared via ${result.activityType}`);
        } else {
          // Shared
          console.log("Shared successfully");
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
        console.log("Share dismissed");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleShare}>
        <Icon name={"share-variant-outline"} size={24} />
        {/* <Icon name={"dots-vertical"} size={24} /> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 30,
  },
});

export default ShareButton;
