export const addDataToLocalStorage = (key: string, data: string) => {
  localStorage.setItem(key, data);
};

export const getTokenFromLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  if (value) {
    return value;
  }
  return null;
};
