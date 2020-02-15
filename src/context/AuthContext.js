import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_error": {
      return { ...state, signupError: action.payload };
    }
    default:
      return state;
  }
};

const signup = dispatch => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", {
        email,
        password
      });
    } catch (error) {
      dispatch({ type: "add_error", payload: "Error when signing up" });
    }
  };
};

const signin = dispatch => {
  return ({ email, password }) => {};
};

const signout = dispatch => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  reducer,
  { signup },
  { isSignedIn: false, signupError: null }
);
