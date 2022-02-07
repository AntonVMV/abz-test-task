export const GET_USERS = "GET_USERS";
export const CLEAR_USERS = "CLEAR_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_SUCCESS";
export const POST_USER = "POST_USER";

export const getUsersAction = () => ({
  type: GET_USERS,
});

export const clearUsersAction = () => ({
  type: CLEAR_USERS,
});

export const getUsersSuccessAction = (payload) => ({
  type: GET_USERS_SUCCESS,
  payload,
});

export const getUsersFailureAction = (payload) => ({
  type: GET_USERS_FAILURE,
  payload,
});

export const postUserAction = (payload) => ({
  type: POST_USER,
  payload,
});
