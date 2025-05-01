const useProduct = (products = []) => {
  //! Me sigue sin gustar pero bueno.
  const getColumnValues = (column) => {
    const value = products.reduce((acc, product) => {
      return new Set([...acc, product[column]]);
    }, []);

    return Array.from(value);
  };

  const filterName = (name, list = products, limit = 5) => {
    if (name === "") return list;

    const regexName = new RegExp(`${name}`, "im");

    const productsByName = list.filter((item) =>
      regexName.test(item["nombre"])
    );

    return productsByName.slice(0, limit);
  };

  const filterByTypes = (values = [], type, list = products, limit = 5) => {
    if (values.length <= 0) return list;

    const productsByType = list.filter((item) => values.includes(item[type]));

    return productsByType.slice(0, limit);
  };

  const filterByPrice = (prices = [], list = products) => {
    return list.filter((item) => {
      return (
        item["precio"].toFixed(2) >= prices[0] &&
        item["precio"].toFixed(2) <= prices[1]
      );
    });
  };

  return {
    getColumnValues,
    filterByTypes,
    filterName,
    filterByPrice,
  };
};

export { useProduct };
