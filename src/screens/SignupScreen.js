import React from 'react'
import { View, StyleSheet, } from 'react-native'
import { Text, Input, Button} from 'react-native-elements';

import Spacer from '../components/Spacer';

const SignUpScreen = ({navigation}) => {
  return (
    <View>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
      />
      <Spacer />
      <Input
        label="Password"
      />
      <Spacer>
        <Button
          title="Sign Up"
        />
      </Spacer>
    </View>
  )
}

const styles = StyleSheet.create({

})


export default SignUpScreen
