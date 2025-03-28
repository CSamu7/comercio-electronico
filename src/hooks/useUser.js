import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { authUser, getUser } from "../services/userService";

const useUser = () => {
  const [user, setUser] = useState();
  const [error, setError] = useState(false);
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const getAuthUser = async () => {
      const token = getItem("token");

      if (!token) return;

      setUser(getUser());
    };

    getAuthUser();
  }, []);

  const auth = async (user) => {
    const { token } = authUser(user);

    return token;
  };

  const addUser = (user) => {};

  return {
    user,
    auth,
    addUser,
  };
};

export { useUser };
