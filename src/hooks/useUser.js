import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useUser = () => {
  const [user, setUser] = useState();
  const [error, setError] = useState(false);
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const getAuthUser = async () => {
      const token = getItem("token");

      if (!token) return;

      try {
        const request = await fetch("https://dummyjson.com/user/me", {
          headers: {
            Authorization: "Bearer " + token, // Pass JWT via Authorization header
          },
        });

        if (!request.ok) throw new Error("Usuario sin autorizacion");

        const response = await request.json();

        setUser(response);
      } catch (error) {
        setError(true);
      } finally {
        setError(false);
      }
    };

    getAuthUser();
  }, []);

  const getUser = async () => {
    const request = await fetch("https://dummyjson.com/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 30, // optional, defaults to 60
      }),
    });

    const response = request.json();

    return response;
  };

  const addUser = (user) => {};

  return {
    user,
    getUser,
    addUser,
  };
};

export { useUser };
