import { useForm } from "react-hook-form";
import styles from "./SearchBar.module.css";
import ActionButton from "../buttons/ActionButton";
import { useNavigate, useSearchParams } from "react-router";

export default function SearchBar() {
  const { register, handleSubmit } = useForm();
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchProducts = (data) => {
    setSearchParams({
      nombre: data["Busqueda"],
    });

    navigate(0);
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
        width="50px"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
          className={styles.searchBarIcon}
        >
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
      </ActionButton>
    </form>
  );
}
