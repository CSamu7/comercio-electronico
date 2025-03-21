const URL_BASE = "http://localhost/backend/public/user/";

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

export { authUser };
