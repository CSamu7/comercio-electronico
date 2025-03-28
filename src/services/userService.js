const URL_BASE = "http://localhost/backend/public";

const authUser = async (user) => {
  const request = await fetch(`${URL_BASE}/user/auth`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!request.ok) throw new Error("Correo/Contraseña incorrectos");

  const response = await request.json();

  return response;
};

const getUser = async (token) => {
  const request = await fetch(`${URL_BASE}/user`, {
    headers: {
      Authorization: "Bearer " + token, // Pass JWT via Authorization header
    },
  });

  if (!request.ok) throw new Error("Usuario sin autorizacion");

  const response = await request.json();

  return response;
};

export { authUser, getUser };
