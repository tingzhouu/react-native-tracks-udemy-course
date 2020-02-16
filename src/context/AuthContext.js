import { AsyncStorage } from "react-native";

import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_error": {
      return { ...state, signupError: action.payload };
    }
    case "signin": {
      return { errorMessage: "", token: action.payload };
    }
    case "clear_error": {
      return { ...state, signupError: "" };
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
    dispatch({ type: "signin", payload: response.data.token });
    navigate("mainFlow");
  } catch (error) {
    dispatch({ type: "add_error", payload: "Error when signing up." });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    navigate("mainFlow");
  } catch (error) {
    dispatch({ type: "add_error", payload: "Error when signing in." });
  }
};

const signout = dispatch => {
  return () => {};
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: "clear_error" });
};

const tryLocalSignIn = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('mainFlow');
  } else {
    navigate('loginFlow');
  }
};

export const { Provider, Context } = createDataContext(
  reducer,
  { signup, signin, clearErrorMessage, tryLocalSignIn },
  { isSignedIn: false, signupError: null }
);
