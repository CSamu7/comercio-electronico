import { useForm } from "react-hook-form";
import styles from "./SearchBar.module.css";
import ActionButton from "../buttons/ActionButton";
import { useNavigate } from "react-router";
import searchBarUrl from "../../assets/search-icon.png";
import { useURLParams } from "../../hooks/useParams";

export default function SearchBar() {
  const { register, handleSubmit } = useForm();
  const { addFilter } = useURLParams();
  const navigate = useNavigate();

  const searchProducts = (data) => {
    if (location.pathname === "/productos") {
      addFilter("nombre", data["Busqueda"]);
    } else {
      navigate(`/productos?nombre=${data["Busqueda"]}`);
    }
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit(searchProducts)}>
      <input
        className={styles.inputSearchBar}
        type="search"
        placeholder="Buscar"
        name="search-bar"
        id="search-bar"
        {...register("Busqueda")}
      />
      <ActionButton
        className={styles.btnSearchBar}
        variant={"btnWithBg"}
        width="60px"
        size="small"
      >
        <img className={styles.searchIcon} src={searchBarUrl} />
      </ActionButton>
    </form>
  );
}
