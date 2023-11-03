import { useState, useEffect, memo } from "react";
import RenderHtml from "react-native-render-html";
import {
  StyleSheet,
  Modal,
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";

import Icon from "./Icon";
import colors from "../utility/colors";
import assetMapping from "../utility/assetMapping";
import { StatusBar } from "expo-status-bar";

const TopicSummary = memo(({ isVisible, onClose, topicId }) => {
  const { width, height } = useWindowDimensions();
  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(true);

  const contentFileName = assetMapping[topicId];

  if (!contentFileName) {
    console.log("File not found");
    return null;
  }

  const readHtmlFile = async () => {
    try {
      const asset = Asset.fromModule(contentFileName);
      await asset.downloadAsync(); // Load the asset

      const htmlUri = asset.localUri || asset.uri; // Get the local URI

      let fileInfo = await FileSystem.getInfoAsync(htmlUri);

      if (fileInfo.exists) {
        const content = await FileSystem.readAsStringAsync(htmlUri);
        setHtmlContent(content);
      } else {
        console.error("HTML file doesn't exist");
      }
    } catch (error) {
      console.error("Error reading HTML file:", error);
    } finally {
      console.log(loading);
      setLoading(false);
    }
  };

  useEffect(() => {
    readHtmlFile();
  }, [contentFileName]);

  return (
    <Modal visible={isVisible} animationType="slide">
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Icon name={"close"} size={32} color={colors.danger} />
          </TouchableOpacity>
          <View>
            {loading ? (
              <ActivityIndicator color={"blue"} size={"large"} />
            ) : (
              <RenderHtml
                source={{
                  html: htmlContent,
                }}
                contentWidth={width}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
});

export default TopicSummary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    // backgroundColor: "lightblue",
  },
  closeButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    position: "absolute",
    borderWidth: 1,
    width: 55,
    height: 55,
    borderRadius: 27,
    borderColor: "lightgray",
    elevation: 8,
    top: 10,
    zIndex: 11,
    right: 10,
  },
});
