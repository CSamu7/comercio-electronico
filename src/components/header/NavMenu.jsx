import styles from "./NavMenu.module.css";

export default function NavMenu() {
  const PAGES = [
    "inicio",
    "departamentos",
    "productos",
    "ofertas",
    "contacto",
    "identidad",
    "acerca de",
    "politicas",
  ];

  const navItems = PAGES.map((page) => {
    const url = page.replaceAll(" ", "-");

    return (
      <li key={page}>
        <a href={url === "inicio" ? "/" : url}>{page}</a>
      </li>
    );
  });

  return (
    <nav className={styles.menuNav}>
      <ul className={styles.nav}>{navItems}</ul>
    </nav>
  );
}
