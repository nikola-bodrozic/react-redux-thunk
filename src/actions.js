import * as actions from "./constants";
import axios from "axios";

export const fetchUsers = () => async (disp, getState) => {
  disp({ type: actions.FETCH_USERS_REQUSET });
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    disp({ type: actions.FETCH_USERS_SUCCESS, payload: response.data });
  } catch (error) {
    disp({ type: actions.FETCH_USERS_FAILURE, payload: error });
  }
};

export const fetchPosts = (id) => async (disp, getState) => {
  disp({ type: actions.FETCH_POSTS_REQUSET });
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    disp({ type: actions.FETCH_POSTS_SUCCESS, payload: response.data });
  } catch (error) {
    disp({ type: actions.FETCH_POSTS_FAILURE, payload: error });
  }
};