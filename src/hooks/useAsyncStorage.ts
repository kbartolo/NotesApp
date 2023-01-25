import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAsyncStorage = (_key: string, _initialValue: any) => {
  const [storedValue, setStoredValue] = useState<any>();
  const [key, setKey] = useState<any>(_key);
  const [initialValue, setInitialValue] = useState<any>(_initialValue);

  const getStored = async (key: string, initialValue?: any) => {
    try {
      const item = await AsyncStorage.getItem(key);
      const value = item ? JSON.parse(item) : initialValue;
      setStoredValue(value);
      setStored(value);
    } catch (error) {
      console.log(error);
    }
  };

  const removeStored = () => {
    AsyncStorage.removeItem(key);
  };

  useEffect(() => {
    getStored(key, initialValue);
  }, [key, initialValue]);

  const setStored = async (value: string) => {
    try {
      const valueToStore = value;
      setStoredValue(valueToStore);
      await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return {storedValue, setStored, removeStored, getStored};
};
