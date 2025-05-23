const getCheckoutURL = async (products, token) => {
  const request = await fetch(import.meta.env.VITE_CHECKOUT_URL, {
    method: "POST",
    body: JSON.stringify(products),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const response = await request.json();

  return response;
};

export { getCheckoutURL };
