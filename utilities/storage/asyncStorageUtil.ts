import AsyncStorage from "@react-native-async-storage/async-storage";

// Define a generic type for AsyncStorage operations
type StorageValue = string | number | boolean | object | null | [];

const AsyncStorageUtil = {
  // Save data with a specific key
  setItem: async <T extends StorageValue>(
    key: string,
    value: T
  ): Promise<void> => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.error("Error saving data: ", e);
    }
  },

  // Get data with a specific key
  getItem: async <T extends StorageValue>(key: string): Promise<T | null> => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? (JSON.parse(jsonValue) as T) : null;
    } catch (e) {
      console.error("Error fetching data: ", e);
      return null;
    }
  },

  // Remove data with a specific key
  removeItem: async (key: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error("Error removing data: ", e);
    }
  },

  // Clear all data from async storage
  clear: async (): Promise<void> => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.error("Error clearing data: ", e);
    }
  },
};

export default AsyncStorageUtil;
