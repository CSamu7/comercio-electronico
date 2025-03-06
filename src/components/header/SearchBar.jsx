import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <input
      className={styles.searchBar}
      type="search"
      placeholder="Buscar"
      name="search-bar"
      id="search-bar"
    />
  );
}
