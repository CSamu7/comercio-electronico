const getCheckoutURL = async (shoppingCart) => {
  const request = await fetch(import.meta.env.VITE_CHECKOUT_URL, {
    method: "POST",
    body: JSON.stringify(shoppingCart),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await request.json();

  return response;
};

export { getCheckoutURL };
