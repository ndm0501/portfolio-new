const setLocalStorageItem = (key, value) => {
  window.localStorage.setItem(key, value);
};

const getLocalStorageItem = (key) => {
  return window.localStorage.getItem(key);
};

const removeLocalStorageItem = (key) => {
  return window.localStorage.removeItem(key);
};

export { setLocalStorageItem, getLocalStorageItem, removeLocalStorageItem };