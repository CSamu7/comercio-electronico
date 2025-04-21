import states from "../data/estados.json";
import towns from "../data/estados-municipios.json";
import { capitalize } from "../utils/formatStrings";

const useLocations = () => {
  const getStates = () => {
    return states.map((state) => {
      return capitalize(state.nombre, 2);
    });
  };

  const getMunicipalities = (state) => {
    return towns[state];
  };

  return {
    getStates,
    getMunicipalities,
  };
};

export { useLocations };
