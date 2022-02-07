export const getUsersRequest = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

export const postUserRequest = async (value, token) => {
  const response = await fetch(
    "https://frontend-test-assignment-api.abz.agency/api/v1/users",
    {
      method: "POST",
      body: value,
      headers: {
        Token: token,
      },
    }
  );
  const result = await response.json();
  return result;
};
