const URL_BASE = "http://localhost/backend/public/shopping-cart";

const getShoppingCart = async (idUser) => {
  const request = await fetch(`${URL_BASE}/${idUser}`, {
    method: "GET",
  });

  const response = await request.json();

  return response;
};

const addShoppingCartService = async (idUser, idProduct) => {
  const request = await fetch(`${URL_BASE}/${idUser}`, {
    method: "POST",
    body: JSON.stringify({
      id_product: idProduct,
    }),
  });

  const response = await request.json();

  return response;
};

const updateProductAmountService = async (idUser, idProduct, amount) => {
  const request = await fetch(`${URL_BASE}/${idUser}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id_prod: idProduct,
      cantidad: amount,
    }),
  });

  const response = await request.json();

  return response;
};

const removeShoppingCartService = async (idUser, idProduct) => {
  const request = await fetch(`${URL_BASE}/${idUser}`, {
    method: "DELETE",
    body: JSON.stringify({
      id_product: idProduct,
    }),
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
