import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input label="Email" onChangeText={setEmail} autoCapitalize="none" />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginTop: 10,
    marginLeft: 15
  }
});

export default AuthForm;
