import { useSearchParams } from "react-router";

const useURLParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const addFilter = (name, value) => {
    if (searchParams.has(name, value)) return;

    const newParams = new URLSearchParams(searchParams);
    newParams.append(name, value);

    setSearchParams(newParams);
  };

  const replaceFilter = (name, value) => {
    if (searchParams.has(name)) {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete(name);
      newParams.append(name, value);

      setSearchParams(newParams);
    }
  };

  const addMultipleFilters = (filters = []) => {
    const newParams = new URLSearchParams(searchParams);

    for (const [name, value] of filters) {
      if (value === "") {
        newParams.delete(name);
      } else if (newParams.has(name)) {
        newParams.set(name, value);
      } else {
        newParams.append(name, value);
      }
    }

    setSearchParams(newParams);
  };

  const deleteFilter = (name, value) => {
    searchParams.delete(name, value);
    setSearchParams(searchParams);
  };

  return {
    searchParams,
    addFilter,
    addMultipleFilters,
    replaceFilter,
    deleteFilter,
  };
};

export { useURLParams };
