import NavMenu from "./NavMenu";
import styles from "./Header.module.css";
import SearchBar from "./SearchBar";
import ShoppingCart from "./ShoppingCart";
import Button from "../Button";
import useWindowSize from "../../hooks/useWindowSize";

export default function Header() {
  const [width, height] = useWindowSize();

  return (
    <>
      <header className={styles.header}>
        <img className={styles.headerLogo} src="./logo.png"></img>
        <SearchBar></SearchBar>
        {width < 720 && (
          <svg
            className={styles.btnMenuMobile}
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        )}

        {width > 720 && (
          <div className={styles.headerUser}>
            <ShoppingCart></ShoppingCart>
            <Button className={styles.btnProfile}>Samuel Perez</Button>
          </div>
        )}
      </header>
      {width > 720 && <NavMenu></NavMenu>}
    </>
  );
}
