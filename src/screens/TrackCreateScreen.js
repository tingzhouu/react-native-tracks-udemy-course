import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";

import Map from "../components/Map";
import { requestPermissionsAsync } from "expo-location";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);
  async function startWatching() {
    try {
      await requestPermissionsAsync();
    } catch (e) {
      setErr(e);
    }
  }

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      {err ? <Text>{err}</Text> : null}
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
