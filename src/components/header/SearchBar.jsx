import { useForm } from "react-hook-form";
import styles from "./SearchBar.module.css";
import ActionButton from "../buttons/ActionButton";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import searchBarUrl from "../../assets/search-icon.png";

export default function SearchBar() {
  const { register, handleSubmit } = useForm();
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const searchProducts = (data) => {
    const params = new URLSearchParams({ nombre: data["Busqueda"] });

    if (location.pathname === "/productos") {
      setSearchParams(params);
      navigate(0);
    } else {
      navigate(`/productos?${params}`);
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
