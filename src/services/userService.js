const URL_BASE = "http://localhost/backend/public";

const authUser = async (user) => {
  const request = await fetch(`${URL_BASE}/user/auth`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await request.json();

  if (!request.ok) throw response;

  return response;
};

const getUser = async (token) => {
  const request = await fetch(`${URL_BASE}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const response = await request.json();

  return response;
};

const postUser = async (user) => {
  const request = await fetch(`${URL_BASE}/user`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const response = await request.json();

  return response;
};

export { authUser, getUser, postUser };
