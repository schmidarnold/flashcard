const APP_STORAGE_KEY = 'FLASH_CARD_STORAGE';
import { AsyncStorage } from 'react-native';

export const loadState = () => {
  try {
    const serializedState = AsyncStorage.getItem(APP_STORAGE_KEY);
    const parsedData = JSON.parse(serializedState)
    console.log("load state from asyncStorage: ")
    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);

  } catch (err) {
    return undefined;
  }
};


export const saveState = (state) => {
  try {

    const serializedState = JSON.stringify(state);
    AsyncStorage.setItem(APP_STORAGE_KEY, serializedState);
    console.log("save state to asyncStorage: " + serializedState)
  } catch (err) {
    // custom error
  }
};
