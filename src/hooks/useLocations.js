import states from "../../estados.json";
import towns from "../../estados-municipios.json";
import { capitalize } from "../components/helpers/formatStrings";

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
