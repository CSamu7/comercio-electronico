import styles from "./Header.module.css";

import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";
import ShoppingCart from "./ShoppingCart";
import LinkButton from "../buttons/LinkButton";

import useWindowSize from "../../hooks/useWindowSize";
import { useUser } from "../../hooks/useUser";
import ActionButton from "../buttons/ActionButton";
import MenuUser from "../MenuUser";

export default function Header() {
  const [width] = useWindowSize();
  const { user } = useUser();

  const btnProfile = user ? (
    <ActionButton variant="btnWithBg">
      <></>
    </ActionButton>
  ) : (
    <LinkButton variant="btnWithBg" url="/inicio-de-sesion">
      Iniciar sesion
    </LinkButton>
  );

  //TODO: Si no hay un usuario cargado, quitar el carrito de compras.
  return (
    <div className={styles.headerContainer}>
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
            {user && <ShoppingCart></ShoppingCart>}
            {btnProfile}
          </div>
        )}
      </header>
      {width > 720 && <NavMenu></NavMenu>}
    </div>
  );
}
