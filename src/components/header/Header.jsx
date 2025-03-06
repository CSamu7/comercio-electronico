import NavMenu from "./NavMenu";
import styles from "./Header.module.css";
import Logo from "../Logo";
import SearchBar from "./SearchBar";
import ShoppingCart from "./ShoppingCart";
import Button from "../Button";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Logo></Logo>
        <SearchBar></SearchBar>
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
        <div className={styles.headerUser}>
          <ShoppingCart></ShoppingCart>
          <Button className={styles.btnProfile}>Samuel Perez</Button>
        </div>
      </header>
      <NavMenu></NavMenu>
    </>
  );
}
