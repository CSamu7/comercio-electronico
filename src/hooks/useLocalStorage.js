const useLocalStorage = () => {
  const addItem = (key, item) => {
    localStorage.setItem(key, item);
  };

  const getItem = (key) => {
    const item = localStorage.getItem(key);

    if (item) return item;

    return "";
  };

  const removeItem = (key) => {
    if (!localStorage.getItem(key)) return;

    localStorage.removeItem(key);
  };

  return {
    addItem,
    getItem,
    removeItem,
  };
};

export { useLocalStorage };
