const getAllProducts = async () => {
  const request = await fetch(`${import.meta.env.VITE_PRODUCT_URL}/`);

  const response = await request.json();

  return response;
};

const getProduct = async ({ params }) => {
  const request = await fetch(
    `${import.meta.env.VITE_PRODUCT_URL}/${params.idProduct}`
  );

  const response = await request.json();

  return response;
};

export { getAllProducts, getProduct };
