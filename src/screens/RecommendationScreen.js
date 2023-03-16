import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  LayoutAnimation,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CONTENT from "../utils/content.json";
import ExpandableComponent from "../components/ExpandableComponent";
import RNPickerSelect from "react-native-picker-select";

const RecommendationScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [multiSelect, setMultiSelect] = useState(false);
  const [listDataSource, setlistDataSource] = useState(CONTENT);
  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      //If multiple select is enabled
      array[index]["isExpanded"] = !array[index]["isExpanded"];
    } else {
      //If single selec is enabled
      array.map((value, placeindex) =>
        placeindex == index
          ? (array[placeindex]["isExpanded"] = !array[placeindex]["isExpanded"])
          : (array[placeindex]["isExpanded"] = false)
      );
    }
    setlistDataSource(array);
  };
  const [sort, setSort] = useState("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e6fffb" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleText}>Results</Text>

          <TouchableOpacity onPress={() => setMultiSelect(!multiSelect)}>
            <Text style={styles.headerButton}>
              {multiSelect
                ? "Enable Single \n Expand"
                : "Enable Multiple \n Expand"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subHeader}>
          <Text style={styles.titleMatch}>Best Matches:</Text>
          {/* <ChevronDownIcon style={styles.iconFilter} /> */}
          {/* <RNPickerSelect
            placeholder={{ label: "Sort by", value: null }}
            onValueChange={(sort) => setSort(sort)}
            items={[
              { label: "Default", value: "Default" },
              { label: "Distance", value: "Distance" },
              { label: "Carpark Availability", value: "Carpark Availability" },
            ]}
          /> */}
        </View>
        <ScrollView>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              item={item}
              onClickFunction={() => {
                updateLayout(key);
              }}
            />
          ))}
        </ScrollView>
        <View style={styles.box} />
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
  },
  headerButton: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 18,
  },

  iconFilter: {
    color: "#00CCBB",
  },
});
