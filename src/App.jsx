import { RouterProvider } from "react-router";
import { router } from "./router";
import { useUser } from "./hooks/useUser";
import { UserContext } from "./context/UserContext";

export default function App() {
  const { user } = useUser();

  return (
    <UserContext.Provider value={user}>
      <RouterProvider router={router}></RouterProvider>
    </UserContext.Provider>
  );
}
