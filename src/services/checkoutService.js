const URL_BASE = "http://localhost/backend/public/checkout-session";

const getCheckoutURL = async (shoppingCart) => {
  const request = await fetch(URL_BASE, {
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
