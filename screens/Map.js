import { useState, useLayoutEffect, useEffect } from 'react';
import { Button, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import { useRef } from 'react'; // For google map camera
import app from '../app.json';

import { useNavigation } from '@react-navigation/native';

function Map() {
  const [currentLocation, setCurrentLocation] = useState();
  const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
  const navigation = useNavigation();
  const api_key = app.expo.android.config.googleMaps.apiKey;

  const region = {
    latitude: 1.35, //location.latitude
    longitude: 103.68, //location.longitude
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const mapRef = useRef(null);

  // For verifying user permission on location
  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grant location permissions to use this app.'
      );
      return false;
    }

    return true;
  }
  
  // For locating user location
  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission){
      return;
    }

    const location = await getCurrentPositionAsync(); // original is const location
    console.log(location);
    setCurrentLocation({ lat: location.coords.latitude, lng: location.coords.longitude });
  }

  // Call getLocationHandler() after the component has mounted
  useEffect(() => {
    getLocationHandler();
  }, []);

  // const origin = currentLocation ? {latitude: currentLocation.lat, longitude: currentLocation.lng} : null;
  const origin = {latitude: 1.3432438, longitude: 103.682751};
  console.log("Origin point is: " + origin.latitude + ", " + origin.longitude);
  const destination = {latitude: 1.3397443, longitude: 103.7067297};
  const GOOGLE_API_KEY = api_key;

  // useEffect(() => {
  //   if (!origin || !destination) return;

  //   // Zoom and fit to markers
  //   mapRef.current.fitToSuppliedMarkers(["origin", "destination"]), {edgePadding: {top:50, bottom: 50, left: 50, right: 50},};
  // }, [origin, destination]);

  // For Done button to navigate to Result Screen
  function headerButtonPressHandler() {
      navigation.navigate('ResultScreen');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => {
            return <Button title='Done' onPress={headerButtonPressHandler}/>
        }
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <MapView
      style={styles.map}
      initialRegion={region} // need to adjust camera angle
      // onPress={getLocationHandler} //original is selectLocationHandler
      provider={PROVIDER_GOOGLE}
      onMapReady={getLocationHandler}
      // fitToSuppliedMarkers={["origin", "destination"]}
    >
      <Marker title="Origin" coordinate={origin} identifier="origin" />
      <Marker title="Destination" coordinate={destination} identifier="destination" />
      <MapViewDirections 
        origin={origin} 
        destination={destination} 
        apikey={api_key} 
        strokeWidth={5} 
        strokeColor={"purple"}
      />
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
