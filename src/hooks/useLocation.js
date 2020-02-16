import { useState, useEffect } from "react";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from "expo-location";

export default callback => {
  const [err, setErr] = useState(null);
  async function startWatching() {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
        callback
      );
    } catch (e) {
      setErr(e);
    }
  }

  useEffect(() => {
    startWatching();
  }, []);

  return [err];
};
