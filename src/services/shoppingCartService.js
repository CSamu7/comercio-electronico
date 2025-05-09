const getShoppingCart = async (idUser) => {
  const request = await fetch(
    `${import.meta.env.VITE_SHOPPING_CART_URL}/${idUser}`,
    {
      method: "GET",
    }
  );

  const response = await request.json();

  return response;
};

const addShoppingCartService = async (idProduct, cantidad, token) => {
  const request = await fetch(`${import.meta.env.VITE_SHOPPING_CART_URL}`, {
    method: "POST",
    body: JSON.stringify({
      id_prod: idProduct,
      cantidad,
    }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const response = await request.json();

  return response;
};

const updateProductAmountService = async (idUser, idProduct, amount) => {
  const request = await fetch(
    `${import.meta.env.VITE_SHOPPING_CART_URL}/${idUser}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_prod: idProduct,
        cantidad: amount,
      }),
    }
  );

  const response = await request.json();

  return response;
};

const removeShoppingCartService = async (idProduct, token) => {
  const request = await fetch(`${import.meta.env.VITE_SHOPPING_CART_URL}`, {
    method: "DELETE",
    body: JSON.stringify({
      id_prod: idProduct,
    }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const response = await request.json();

  return response;
};

export {
  getShoppingCart,
  addShoppingCartService,
  removeShoppingCartService,
  updateProductAmountService,
};
