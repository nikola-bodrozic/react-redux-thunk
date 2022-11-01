import * as actions from "./constants";
import axios from "axios";

export const fetchPosts = () => async (disp, getState) => {
  disp({ type: actions.FETCH_POSTS_REQUSET });
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    disp({ type: actions.FETCH_POSTS_SUCCESS, payload: response.data });
  } catch (error) {
    disp({ type: actions.FETCH_POSTS_FAILURE, payload: error });
  }
};
