export const getFromApi = async (path) => {
  const response = await fetch(path, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 200) {
    return await response.json();
  }
  return false;
};

export const putFromApi = async (path, body) => {
  const response = await fetch(path, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 200) {
    return await response.json();
  }
  return false;
};
