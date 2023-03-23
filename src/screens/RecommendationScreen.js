import React, { useEffect, useState, useLayoutEffect, Component } from "react";
import { View, Text } from "react-native";
import storesData from "../utils/data.json";
import mallData from "../utils/mall.json";
import {
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  LayoutAnimation,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SortByDropdown from "../components/SortByDropDown";
import ShowLocationPermissionPopup from "../components/ShowLocationPermissionPopup";
import { MaterialIcons } from "@expo/vector-icons";

const storesToVisit = [
  "4FINGERS Crispy Chicken",
  "7-Eleven",
  "@At Tea",
  "A-One Signature",
  "Ajisen",
];
const getDistance = async (lat1, lng1, lat2, lng2) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${lat1},${lng1}&destinations=${lat2},${lng2}&key=AIzaSyCMDxATNzHSEla0qzZC2BdqwIAST_ouKJ0`
  );
  const data = await response.json();
  const distance = data.rows[0].elements[0].distance.value / 1000;
  // console.log("test" + distance);
  return distance;
};
const getCarparkAvailability = async (carparkNumber) => {
  const fetch = require("node-fetch");
  const url = "https://api.data.gov.sg/v1/transport/carpark-availability";

  try {
    const response = await fetch(url);
    const data = await response.json();
    let carparkInfo = null;
    for (let carpark of data.items[0].carpark_data) {
      if (carpark.carpark_number === carparkNumber) {
        carparkInfo = carpark.carpark_info[0];
        break;
      }
    }
    // console.log(carparkNumber);
    // console.log("carparkInfo:", carparkInfo);
    let lotsAvailable = carparkInfo.lots_available;
    // console.log("lotsAvailable:", +lotsAvailable);
    return lotsAvailable;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const userLocation = {
  latitude: 1.3541190892039678,
  longitude: 103.68761957122511,
}; // Example user location
const findTopMalls = async (sortOption) => {
  const matchedStoresByMall = storesData.reduce((matchedStores, store) => {
    if (storesToVisit.includes(store.storeName)) {
      store.storeDetails.location.forEach((location) => {
        if (matchedStores[location.mallName]) {
          matchedStores[location.mallName].push(store.storeName);
        } else {
          matchedStores[location.mallName] = [store.storeName];
        }
      });
    }
    return matchedStores;
  }, {});

  let sortedMalls;

  if (sortOption === "Distance") {
    const mallsWithDistance = await Promise.all(
      mallData.Malls.map(async (mall) => {
        const { Latitude, Longitude } = mall.mallDetails.Location;
        const distance = await getDistance(
          userLocation.latitude,
          userLocation.longitude,
          Latitude,
          Longitude
        );
        const { nearestCarpark } = mall.mallDetails;
        const carparkAvailability = await getCarparkAvailability(
          nearestCarpark
        );
        return { mallId: mall.mallId, distance, carparkAvailability };
      })
    );
    sortedMalls = mallsWithDistance
      .sort((mall1, mall2) => mall1.distance - mall2.distance)
      .map((mall) => ({
        mallId: mall.mallId,
        distance: mall.distance.toFixed(2),
        carparkAvailability: mall.carparkAvailability,
      }));
  } else if (sortOption === "Carpark") {
    const mallsWithCarparkAvailability = await Promise.all(
      mallData.Malls.map(async (mall) => {
        const { Latitude, Longitude } = mall.mallDetails.Location;
        const distance = await getDistance(
          userLocation.latitude,
          userLocation.longitude,
          Latitude,
          Longitude
        );
        const { nearestCarpark } = mall.mallDetails;
        const carparkAvailability = await getCarparkAvailability(
          nearestCarpark
        );
        return { mallId: mall.mallId, distance, carparkAvailability };
      })
    );
    sortedMalls = mallsWithCarparkAvailability
      .sort(
        (mall1, mall2) => mall2.carparkAvailability - mall1.carparkAvailability
      )
      .map((mall) => ({
        mallId: mall.mallId,
        distance: mall.distance.toFixed(2),
        carparkAvailability: mall.carparkAvailability,
      }));
  } else {
    const mallsWithDistanceAndCarpark = await Promise.all(
      mallData.Malls.map(async (mall) => {
        const { Latitude, Longitude } = mall.mallDetails.Location;
        const distance = await getDistance(
          userLocation.latitude,
          userLocation.longitude,
          Latitude,
          Longitude
        );
        const { nearestCarpark } = mall.mallDetails;
        const carparkAvailability = await getCarparkAvailability(
          nearestCarpark
        );
        return { mallId: mall.mallId, distance, carparkAvailability };
      })
    );
    const mallMatchCount = Object.entries(matchedStoresByMall).reduce(
      (matchCount, [mallName, stores]) => {
        matchCount[mallName] = stores.length;
        return matchCount;
      },
      {}
    );

    sortedMalls = mallsWithDistanceAndCarpark
      .map((mall) => ({
        mallId: mall.mallId,
        distance: mall.distance.toFixed(2),
        carparkAvailability: mall.carparkAvailability,
        matchedStoreCount: mallMatchCount[mall.mallId] || 0,
      }))
      .sort((a, b) => b.matchedStoreCount - a.matchedStoreCount);
  }

  return sortedMalls.slice(0, 5);
};

const RecommendationScreen = () => {
  const [sortOption, setSortOption] = useState("Default");
  const [topMalls, setTopMalls] = useState([]);
  const [expandedMalls, setExpandedMalls] = useState([]);

  useEffect(() => {
    const fetchTopMalls = async () => {
      const malls = await findTopMalls(sortOption);
      setTopMalls(malls);
    };
    fetchTopMalls();
  }, [sortOption]);
  const toggleExpansion = (mallName) => {
    if (expandedMalls.includes(mallName)) {
      setExpandedMalls(expandedMalls.filter((mall) => mall !== mallName));
    } else {
      setExpandedMalls([...expandedMalls, mallName]);
    }
  };

  const isExpanded = (mallName) => expandedMalls.includes(mallName);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    ShowLocationPermissionPopup();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e6fffb" }}>
      <View style={styles.container}>
        <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="black" />
            <Text style={styles.backText}> Back </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Text style={styles.titleText}>Results</Text>
        </View>
        <View style={styles.subHeader}>
          <Text style={styles.titleMatch}>Best Matches:</Text>
          <SortByDropdown
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
        </View>
        <ScrollView>
          {topMalls.map(({ mallId, carparkAvailability, distance }) => {
            const matchedStoreCount = storesData.filter(
              (store) =>
                storesToVisit.includes(store.storeName) &&
                store.storeDetails.location.some(
                  (location) => location.mallName === mallId
                )
            ).length;
            let mallInfo = null;

            if (sortOption === "Distance") {
              mallInfo = `${mallId} (${distance}km)`;
            } else if (sortOption === "Carpark") {
              mallInfo = `${mallId} (${carparkAvailability} available slots)`;
            } else {
              mallInfo = `${mallId} (${matchedStoreCount}/${storesToVisit.length} stores)`;
            }
            return (
              <View key={mallId}>
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => toggleExpansion(mallId)}
                >
                  <MaterialIcons
                    name="arrow-drop-down"
                    size={24}
                    color="#ccc"
                  />
                  <Text style={styles.itemText}>{mallInfo}</Text>
                  {/* <Text style={styles.itemText}>
                    Distance: {distance}m | Availability: {carparkAvailability}
                  </Text> */}
                </TouchableOpacity>
                {isExpanded(mallId) && (
                  <View>
                    <SafeAreaView style={styles.content}>
                      <Text style={styles.text}>
                        {matchedStoreCount}/{storesToVisit.length} stores match:
                      </Text>
                      {storesData
                        .filter(
                          (store) =>
                            storesToVisit.includes(store.storeName) &&
                            store.storeDetails.location.some(
                              (location) => location.mallName === mallId
                            )
                        )
                        .map((store) => (
                          <Text style={styles.text} key={store.storeName}>
                            {store.storeName}
                          </Text>
                        ))}
                      <Text style={styles.itemText}>
                        Distance: {distance}km | Availability:{" "}
                        {carparkAvailability}
                      </Text>
                      <TouchableOpacity
                        title="Go"
                        style={styles.goButton}
                        onPress={() =>
                          navigation.navigate("CarparkOrMall", {
                            resultMall: mallId,
                            resultStores: storesData
                              .filter(
                                (store) =>
                                  storesToVisit.includes(store.storeName) &&
                                  store.storeDetails.location.some(
                                    (location) => location.mallName === mallId
                                  )
                              )
                              .map((store) => store.storeName),
                          })
                        }
                      >
                        <Text style={styles.goButtonText}>Go</Text>
                      </TouchableOpacity>
                    </SafeAreaView>
                  </View>
                )}
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default RecommendationScreen;

const styles = StyleSheet.create({
  container: {
    flext: 1,
    paddingTop: 30,
  },
  back: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  backText: {
    marginLeft: 5,
    fontSize: 16,
  },
  header: {
    flexDirection: "row",
    padding: 10,
  },
  subHeader: {
    flexDirection: "row",
    padding: 10,
  },
  titleText: {
    flex: 1,
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#436661",
  },
  titleMatch: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: "#436661",
    marginLeft: 10,
    marginTop: 10,
  },
  headerButton: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 18,
  },

  iconFilter: {
    color: "#00CCBB",
  },
  item: {
    backgroundColor: "#7fb4ac",
    padding: 25,
    margin: 10,
    marginBottom: 0,
    // paddingTop: 10,
    borderRadius: 40,
    flexDirection: "row",
  },
  itemText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#436661",
    margin: 10,
    opacity: 100,
  },

  text: {
    fontSize: 16,
    padding: 10,
    color: "white",
  },
  goButton: {
    backgroundColor: "#7fb4ac",
    padding: 10,
    margin: 10,
    marginLeft: 200,
    borderRadius: 40,
    flexDirection: "row",
  },
  goButtonText: {
    fontSize: 16,
    padding: 5,
    color: "white",
    flex: 1,
    justifyContent: "center",
    marginLeft: 40,
  },
});
