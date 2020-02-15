import { AsyncStorage } from "react-native";

import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_error": {
      return { ...state, signupError: action.payload };
    }
    default:
      return state;
  }
};

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", {
      email,
      password
    });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "login_success", payload: response.data.token });
    navigate('mainFlow');
  } catch (error) {
    dispatch({ type: "add_error", payload: "Error when signing up." });
  }
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
