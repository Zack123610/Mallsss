import React, { useState } from "react";
import styled from "styled-components/native";
import { FlatList, View } from "react-native";
import { HistoryInfoCard } from "../components/history-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import historyDummyData from "../../../services/history/mock/historyDummyData.json";
import { HistoryDropdown } from "../components/history-dropdown";

export const HistoryScreen = () => {
  const [sortOption, setSortOption] = useState("Most Recent");
  let sortedData = [...historyDummyData];

  if (sortOption === "Most Recent") {
    sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortOption === "Least Recent") {
    sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (sortOption === "A-Z") {
    sortedData.sort((a, b) => a.mall.localeCompare(b.mall));
  }

  return (
    <SafeArea>
      <View style={{ backgroundColor: "#E7F4F2" }}>
        <Spacer position="top" size="large" />
        <DropdownAlignment>
          <HistoryDropdown
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
        </DropdownAlignment>
        <Spacer position="" size="large">
          <FlatList
            data={sortedData}
            renderItem={({ item }) => (
              <Spacer position="bottom" size="large">
                <HistoryInfoCard history={item} />
              </Spacer>
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ padding: 20 }}
          />
        </Spacer>
      </View>
    </SafeArea>
  );
};

const DropdownAlignment = styled.View`
  margin-right: 20px;
  flex-direction: row;
  justify-content: flex-end;
  z-index: 1;
`;
