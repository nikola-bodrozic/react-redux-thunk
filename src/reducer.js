import * as actions from "./constants";

const iniState = {
  items: [],
  loading: false,
  error: null,
};

export const postReducer = (state = iniState, action) => {
  switch (action.type) {
    case actions.FETCH_POSTS_REQUSET:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actions.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case actions.FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return iniState;
  }
};
