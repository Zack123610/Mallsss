import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";

const ExpandableComponent = ({ item, onClickFunction }) => {
  const [layoutHeight, setLayoutHeight] = useState(0);
  const subCategoryCount = item.subcategory.length;
  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View>
      <TouchableOpacity style={styles.item} onPress={onClickFunction}>
        <Text style={styles.itemText}>{item.category_name}</Text>
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: "hidden",
        }}
      >
        <SafeAreaView style={styles.content}>
          <Text style={styles.text}>{subCategoryCount}/5 store matches </Text>

          {item.subcategory.map((item, key) => (
            <SafeAreaView key={key} style={styles.contentList}>
              <Text style={styles.text}>{item.val}</Text>
              {/* <View style={styles.seperator} /> */}
            </SafeAreaView>
          ))}

          <Text style={styles.text}>Distance : {item.distance} km away</Text>
          <Text style={styles.text}>
            Nearest Carpark Occupancy : {item.carparkAvailability}
          </Text>
        </SafeAreaView>
      </View>
    </View>
  );
};
export default ExpandableComponent;

const styles = StyleSheet.create({
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
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
    borderTopRightRadius: -30,
  },
  contentList: {
    // paddingLeft: 10,
    // paddingRight: 10,
    backgroundColor: "#436661",
    marginLeft: 10,
    marginRight: 10,
    opacity: 100,
  },
  text: {
    fontSize: 16,
    padding: 10,
    color: "#e6fffb",
  },
  seperator: {
    height: 0.5,
    backgroundColor: "#c8c8c8",
    width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "#4A4A4A",
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: "hidden",
  },
  circle: {
    position: "absolute",
    width: 100,
    height: 100,
    backgroundColor: "#FAD0C3",
    borderRadius: 50,
  },
});
