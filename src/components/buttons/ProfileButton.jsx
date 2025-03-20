import { useState } from "react";
import MenuUser from "../MenuUser";
import ActionButton from "./ActionButton";

export default function ProfileButton({ username }) {
  const [isActive, setIsActive] = useState(false);

  const displayMenu = () => {};

  return (
    <ActionButton>
      <p>{username}</p>
      <MenuUser></MenuUser>
    </ActionButton>
  );
}
