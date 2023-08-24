import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
    console.log("Error saving completed quiz:", e);
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
    return null;
  } catch (e) {
    // error reading value
    console.log("Error getting completed quiz:", e);
  }
};

const removeItem = async () => {
  try {
    await AsyncStorage.removeItem(key);
    console.log("Item removed with key :", key);
  } catch (e) {
    // error reading value
    console.log("Error deleting", e);
  }
};

const removeItems = async (keys) => {
  try {
    await AsyncStorage.multiRemove(keys);
    console.log("Items removed with keys :", keys);
  } catch (e) {
    // error reading value
    console.log("Error deleting", e);
  }
};

const clearAll = async () => {
  try {
    await AsyncStorage.clear();
    console.log("cleared cash");
  } catch (e) {
    // error reading value
    console.log("Error during clearing cach", e);
  }
};

export default {
  clearAll,
  getData,
  removeItem,
  removeItems,
  storeData,
};
