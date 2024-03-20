import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(defaultValue);

  useEffect(() => {
    const loadStoredValue = async () => {
      try {
        const value = await AsyncStorage.getItem(keyName);
        if (value !== null) {
          setStoredValue(JSON.parse(value));
        } else {
          await AsyncStorage.setItem(keyName, JSON.stringify(defaultValue));
        }
      } catch (error) {
        console.error("Error loading data from AsyncStorage:", error);
      }
    };

    loadStoredValue();
  }, [keyName, defaultValue]);

  const setValue = async (newValue) => {
    try {
      await AsyncStorage.setItem(keyName, JSON.stringify(newValue));
      setStoredValue(newValue);
    } catch (error) {
      console.error("Error saving data to AsyncStorage:", error);
    }
  };

  return [storedValue, setValue];
};