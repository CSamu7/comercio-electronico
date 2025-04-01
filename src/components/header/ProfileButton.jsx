import { useState } from "react";
import ActionButton from "../buttons/ActionButton";
import styles from "./ProfileButton.module.css";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router";
import MenuUserItem from "./MenuUserItem";

export default function ProfileButton({ user }) {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const navigate = useNavigate();
  const { logout } = useUser();

  const { nombre, apeP } = user;
  const fullName = `${nombre} ${apeP} `;

  const MENU_ITEMS = {
    Perfil: () => navigate("/perfil"),
    ["Lista de Deseos"]: () => navigate("/lista-de-deseos"),
    ["Cerrar sesión"]: () => {
      logout();
      navigate(0);
    },
  };

  const menuItems = Object.entries(MENU_ITEMS).map((item, index) => {
    return (
      <MenuUserItem key={index} onClick={item[1]}>
        {item[0]}
      </MenuUserItem>
    );
  });

  return (
    <div className={styles.btnProfile}>
      <ActionButton
        variant="btnWithBg"
        className={styles.profileButton}
        onClick={() => setIsActiveMenu(!isActiveMenu)}
      >
        {fullName}
      </ActionButton>
      {isActiveMenu && (
        <div className={styles.menuUser}>
          <ul className={styles.menuList}>{menuItems}</ul>
        </div>
      )}
    </div>
  );
}
