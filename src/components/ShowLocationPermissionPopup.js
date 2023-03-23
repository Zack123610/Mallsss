import Geolocation from "react-native-geolocation-service";
import { Alert } from "react-native";
import { PermissionsAndroid } from "react-native";

const getCurrentLocation = async () => {
  try {
    const response = await fetch(
      "https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );
    const data = await response.json();
    return data.location;
  } catch (error) {
    console.warn(error);
    return null;
  }
};
const ShowLocationPermissionPopup = async () => {
  Alert.alert(
    "Location Permission",
    "This app needs access to your location to show your current location on the map.",
    [
      {
        text: "Deny",
        onPress: () => console.log("Location permission denied"),
        style: "cancel",
      },
      {
        text: "Allow",
        onPress: async () => {
          // await requestLocationPermission();
          try {
            const location = await getCurrentLocation();
            console.log("Location: ", location);

            // Store the location data and pass it on to other functions
          } catch (error) {
            console.warn(error);
            console.log("helo");
          }
        },
      },
    ]
  );
};

export default ShowLocationPermissionPopup;
