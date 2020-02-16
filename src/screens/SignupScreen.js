import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from 'react-navigation';

import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignUpScreen = () => {
  const { state, signup, clearErrorMessage , tryLocalSignIn} = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignIn();
  }, [])

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.signupError || null}
        onSubmit={signup}
        submitButtonText="Sign Up"
      />
      <NavLink
        linkDescription="Already have an account? Sign in instead."
        routeName="Signin"
      />
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginTop: 10,
    marginLeft: 15
  },
  link: {
    color: "blue"
  }
});

export default SignUpScreen;
