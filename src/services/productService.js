const URL_BASE = "http://localhost/backend/public";

const getAllProducts = async () => {
  const request = await fetch(`${URL_BASE}/product`);

  const response = await request.json();

  return response;
};

export { getAllProducts };
