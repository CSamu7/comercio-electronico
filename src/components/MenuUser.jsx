import { Link } from "react-router";

export default function MenuUser() {
  const OPTIONS = ["Perfil", "Cerrar sesión"];

  const listOptions = OPTIONS.map((option) => {
    return (
      <li>
        <Link>{option}</Link>
      </li>
    );
  });

  return <ul>{listOptions}</ul>;
}
