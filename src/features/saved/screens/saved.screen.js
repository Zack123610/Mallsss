import React, { useState } from "react";
import styled from "styled-components/native";
import { FlatList, View } from "react-native";
import { SavedInfoCard } from "../components/saved-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import savedDummyData from "../../../services/saved/mock/savedDummyData.json";
import { SavedDropdown } from "../components/saved-dropdown";

export const SavedScreen = () => {
  const [sortOption, setSortOption] = useState("Most Recently Added");
  let sortedData = [...savedDummyData];

 if (sortOption === "A-Z") {
    sortedData.sort((a, b) => a.store.localeCompare(b.store));
  }

  return (
    <SafeArea>
      <View style={{backgroundColor : "#E7F4F2"}}>
        <Spacer position="top" size="large" />
        <DropdownAlignment>
          <SavedDropdown
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
        </DropdownAlignment>
        <Spacer position="" size="large">
          <FlatList
            data={sortedData}
            renderItem={({ item }) => (
              <Spacer position="bottom" size="large">
                <SavedInfoCard saved={item} />
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
