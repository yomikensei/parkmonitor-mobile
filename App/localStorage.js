import AsyncStorage from '@react-native-community/async-storage';

export const loadState = async (itemKey = 'parkmonitor') => {
  try {
    const serializedState = await AsyncStorage.getItem(itemKey);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = async (state, itemKey = 'fieldinsight') => {
  const serializedState = JSON.stringify(state);
  await AsyncStorage.setItem(itemKey, serializedState);
};

export const removeState = async (itemKey = 'fieldinsight') => {
  await AsyncStorage.removeItem(itemKey);
};

export const clearState = async () => {
  await AsyncStorage.clear();
};
