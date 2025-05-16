const addSale = async (products, token) => {
  const request = await fetch(`${import.meta.env.VITE_SALE_URL}`, {
    method: "POST",
    body: JSON.stringify({
      products: products,
    }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const response = await request.json();

  return response;
};

export { addSale };
