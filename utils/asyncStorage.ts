import AsyncStorage from "@react-native-async-storage/async-storage";
import logger from "./logger";

export const setItem = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    logger.error("Error storing value: ", error);
  }
};

export const getItem = async (key: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    logger.error("Error retrieving value: ", error);
    return null;
  }
};

export const removeItem = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    logger.error("Error deleting value: ", error);
  }
};

