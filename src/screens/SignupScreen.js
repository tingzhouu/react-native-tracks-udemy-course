import React, { useState } from 'react'
import { View, StyleSheet, } from 'react-native'
import { Text, Input, Button} from 'react-native-elements';

import Spacer from '../components/Spacer';

const SignUpScreen = ({navigation}) => {
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
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        onChangeText={setPassword}
      />
      <Spacer>
        <Button
          title="Sign Up"
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
  }
})


export default SignUpScreen
