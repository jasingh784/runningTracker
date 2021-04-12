
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';

export default function MapScreen() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,});
  const [route, setRoute] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      await Location.watchPositionAsync({accuracy: Location.Accuracy.BestForNavigation, distanceInterval: 5}, locationUpdated);
    })();

  }, [])

  const locationUpdated = (locObject) => {
    console.log('inside locationupdated')
    console.log(locObject)
    setRegion({
      latitude: locObject.coords.latitude,
      longitude: locObject.coords.longitude,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    })

    setRoute(oldRoute => [...oldRoute, {
      latitude: locObject.coords.latitude,
      longitude: locObject.coords.longitude,
    }]);

    console.log(route)
  }

  return (
    <SafeAreaView style={styles.container}>
      <MapView  style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}
        region={region}
        >
        <Marker 
          title="You"
          coordinate={region}
        />

        <Polyline 
          coordinates={route}
          strokeColor='#e1341e'
          strokeWidth={5}
        />
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  }
});
