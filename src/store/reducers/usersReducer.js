import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  CLEAR_USERS,
  POST_USER,
} from "../actions/actions";

const initialState = {
  data: null,
  postData: null,
  loading: false,
  error: null,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: true,
      };

    case CLEAR_USERS:
      return {
        ...state,
        data: null,
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        data: state.data
          ? {
              ...action.payload,
              users: [...state.data.users, ...action.payload.users],
            }
          : action.payload,
        loading: false,
      };

    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case POST_USER:
      return {
        ...state,
        postData: action.payload,
      };

    default:
      return state;
  }
};
