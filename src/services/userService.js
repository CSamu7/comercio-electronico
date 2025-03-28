const URL_BASE = "http://localhost/ComercioE/public/";

const authUser = async (user) => {
  const request = await fetch(`${URL_BASE}auth`, {
    method: "POST",
    body: user,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!request.ok) throw new Error("Correo/Contraseña incorrectos");

  const response = await request.json();

  console.log(response);

  return response;
};

const getUser = async (token) => {
  try {
    const request = await fetch(`${URL_BASE}user/auth`, {
      headers: {
        Authorization: "Bearer " + token, // Pass JWT via Authorization header
      },
    });

    if (!request.ok) throw new Error("Usuario sin autorizacion");

    const response = await request.json();

    return response;
  } catch (error) {}
};

export { authUser, getUser };
