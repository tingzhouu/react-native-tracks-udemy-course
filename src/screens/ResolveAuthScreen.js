import React, { useEffect, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';


const ResolveAuthScreen = () => {
  const { tryLocalSignIn } = useContext(AuthContext);
  useEffect(() => {
    tryLocalSignIn();
  }, []);
  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  }
})

export default ResolveAuthScreen
