import { useState, useEffect } from "react";
import RenderHtml from "react-native-render-html";
import {
  StyleSheet,
  Modal,
  View,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { Asset } from "expo-asset";

import Icon from "./Icon";
import colors from "../utility/colors";
import assetMapping from "../utility/assetMapping";

const TopicSummary = ({ isVisible, onClose, topicId }) => {
  const { width } = useWindowDimensions();
  const [htmlContent, setHtmlContent] = useState("");

  const contentFileName = assetMapping[topicId];

  if (!contentFileName) {
    console.log("File not found");
    return null;
  }

  useEffect(() => {
    // Function to read HTML content from the asset file
    const readHtmlFile = async () => {
      try {
        const asset = Asset.fromModule(contentFileName);
        const response = await fetch(asset.uri); // Fetch the content
        const html = await response.text(); // Read as text
        setHtmlContent(html);
      } catch (error) {
        console.error("Error reading HTML file:", error);
      }
    };

    if (isVisible && contentFileName) {
      readHtmlFile();
    }
  }, [isVisible, contentFileName]);

  return (
    <Modal visible={isVisible} animationType="slide">
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Icon name={"close"} size={32} color={colors.danger} />
          </TouchableOpacity>
          <RenderHtml
            source={{
              html: htmlContent,
            }}
            contentWidth={width}
          />
        </View>
      </ScrollView>
    </Modal>
  );
};

export default TopicSummary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  closeButton: {
    alignSelf: "flex-end",
    paddingRight: 20,
    paddingTop: 18,
  },
});
