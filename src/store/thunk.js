import {
  getUsersAction,
  getUsersSuccessAction,
  getUsersFailureAction,
  postUserAction,
  clearUsersAction,
} from "./actions/actions";
import { getUsersRequest, postUserRequest } from "./requestAPI/requestAPI";

export const getUsers = (url) => async (dispatch) => {
  dispatch(getUsersAction());
  try {
    const result = await getUsersRequest(url);

    dispatch(getUsersSuccessAction(result));
  } catch (error) {
    dispatch(getUsersFailureAction(error.name));
  }
};

const getToken = async () => {
  try {
    const token = await getUsersRequest(
      "https://frontend-test-assignment-api.abz.agency/api/v1/token"
    );
    return token;
  } catch (e) {
    return e;
  }
};

export const postUser = (value) => async (dispatch) => {
  try {
    const token = await getToken();
    const result = await postUserRequest(value, token.token);
    dispatch(postUserAction(result));

    if (result.success) {
      dispatch(clearUsersAction());

      dispatch(
        getUsers(
          `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`
        )
      );
    }
  } catch (e) {
    dispatch(getUsersFailureAction(e.name));
  }
};
