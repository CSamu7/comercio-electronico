import { RouterProvider } from "react-router";
import { router } from "./router";
import { useUser } from "./hooks/useUser";
import { UserContext } from "./context/UserContext";
import { ShoppingCartContext } from "./context/ShoppingCarContext";
import { useShoppingCart } from "./hooks/useShoppingCart";

export default function App() {
  const { user } = useUser();
  const shoppingCart = useShoppingCart(user?.id);

  return (
    <UserContext.Provider value={user}>
      <ShoppingCartContext.Provider value={shoppingCart}>
        <RouterProvider router={router}></RouterProvider>
      </ShoppingCartContext.Provider>
    </UserContext.Provider>
  );
}
