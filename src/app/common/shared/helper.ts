export const setToLocal = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocal = <T = any>(key: string, defaultSet = '[]'): T => {
  return JSON.parse(localStorage.getItem(key) || defaultSet);
};
