import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { authUser, getUser, postUser } from "../services/userService";

const useUser = () => {
  const [user, setUser] = useState();
  const { getItem, removeItem } = useLocalStorage();

  useEffect(() => {
    const getAuthUser = async () => {
      const token = getItem("token");

      if (!token) return;

      const userData = await getUser(token);

      setUser(userData[0]);
    };

    getAuthUser();
  }, []);

  const auth = async (user) => {
    const token = authUser(user);

    return token;
  };

  const addUser = async (user) => {
    const bodyUser = {
      nombre: user["Nombre"],
      apeP: user["Apellido Paterno"],
      apeM: user["Apellido Materno"],
      email: user["Correo"],
      passw: user["Contraseña"],
      direc: `${user["Calle"]}, ${user["Municipio"]}, ${user["Estado"]}`,
    };

    const msg = postUser(bodyUser);
  };

  const logout = () => {
    removeItem("token");
  };

  return {
    user,
    auth,
    addUser,
    logout,
  };
};

export { useUser };
