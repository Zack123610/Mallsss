import React, { useState, useEffect } from 'react';
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { HistoryInfoCard } from "../components/history-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import historyDummyData from "../../../services/history/mock/historyDummyData.json";
import { HistoryDropdown } from "../components/history-dropdown";

import { Picker } from "@react-native-picker/picker";

let sortedData = [...historyDummyData];
const filterOption = async (sortOption) => {
  if (sortOption === "Most Recent") {
    sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortOption === "Least Recent") {
    sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (sortOption === "A-Z") {
    sortedData.sort((a, b) => a.mall.localeCompare(b.mall));
  }
}

        
export const HistoryScreen = () => {
  const [sortOption, setSortOption] = useState("Most Recent"); 
  const [filter, setFilter] = useState([]);
  // let sortedData = [...historyDummyData];

  if (sortOption === "Most Recent") {
    sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortOption === "Least Recent") {
    sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (sortOption === "A-Z") {
    sortedData.sort((a, b) => a.mall.localeCompare(b.mall));
  }

  useEffect(() => {
    const filter = filterOption(sortOption);
    setFilter(filter);
  },{sortOption});

  return (
    <SafeArea>
      <Spacer position="top" size="large"/>
      <HistoryDropdown 
            sortOption={sortOption}
            setSortOption={setSortOption}
      />
      <Spacer position="" size="large">
      <FlatList
        data={sortedData}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <HistoryInfoCard history={item}/>
          </Spacer>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 20 }}
      />
      </Spacer>
    </SafeArea>
  );
};
