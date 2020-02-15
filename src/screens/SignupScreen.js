import React, { useState, useContext } from 'react'
import { View, StyleSheet, } from 'react-native'
import { Text, Input, Button} from 'react-native-elements';

import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignUpScreen = ({navigation}) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {state.signupError && (
        <Text style={styles.errorMessage}>
          {state.signupError}
        </Text>
      )}
      <Spacer>
        <Button
          title="Sign Up"
          onPress={() => signup({ email, password })}
        />
      </Spacer>
    </View>
  )
}

SignUpScreen.navigationOptions = ({ navigation }) => {
  return {
    headerShown: false,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginTop: 10,
    marginLeft: 15,
  }
})


export default SignUpScreen
