const authUser = async (user) => {
  const request = await fetch(`${import.meta.env.VITE_USER_URL}/auth`, {
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
  const request = await fetch(`${import.meta.env.VITE_USER_URL}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const response = await request.json();

  return response;
};

const postUser = async (user) => {
  const request = await fetch(`${import.meta.env.VITE_USER_URL}/`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(user),
  });

  const response = await request.json();

  if (!request.ok) throw response;

  return response;
};

export { authUser, getUser, postUser };
