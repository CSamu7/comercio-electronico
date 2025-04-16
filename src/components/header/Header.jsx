import styles from "./Header.module.css";

import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";
import ShoppingCart from "./ShoppingCartLogo";
import LinkButton from "../buttons/LinkButton";

import useWindowSize from "../../hooks/useWindowSize";
import { useUser } from "../../hooks/useUser";
import ProfileButton from "./ProfileButton";

import Logo from "../../assets/logo.png";

export default function Header() {
  const [width] = useWindowSize();
  const { user } = useUser();

  const btnProfile = user ? (
    <ProfileButton user={user}></ProfileButton>
  ) : (
    <LinkButton variant="btnWithBg" url="/inicio-de-sesion">
      Iniciar sesion
    </LinkButton>
  );

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <img className={styles.headerLogo} src={Logo}></img>
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
