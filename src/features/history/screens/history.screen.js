import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { HistoryInfoCard } from "../components/history-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import historyDummyData from "../../../services/history/mock/historyDummyData.json";
import { HistoryDropdown } from "../components/history-dropdown";

export const HistoryScreen = () => {
  const [sortOption, setSortOption] = useState("Most Recent");
  const [filter, setFilter] = useState([]);
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
    </SafeArea>
  );
};

const DropdownAlignment = styled.View`
  marginRight: 20px;
  flex-direction: row;
  justify-content: flex-end;
  zIndex: 1;
`;
