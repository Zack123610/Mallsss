import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { HistoryInfoCard } from "../components/history-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import historyDummyData from "../../../services/history/mock/historyDummyData.json"

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const HistoryScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <FlatList
      data={historyDummyData}
      renderItem={({ item }) => (
        <Spacer position="bottom" size="large">
          <HistoryInfoCard history={{ mall: item.mall, date: item.date, stores: item.stores, photo: item.photo }} />
        </Spacer>
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 20 }}
    />
  </SafeArea>
);