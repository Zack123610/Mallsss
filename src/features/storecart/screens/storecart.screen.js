import React, { useState } from "react";
import styled from "styled-components/native";
import { FlatList, View } from "react-native";
import { StorecartInfoCard } from "../components/storecart-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { useContext } from "react";
import { storecartDummyData } from "../../../services/storecart/mock/storecartDummyData.json";

export const StorecartScreen = () => {
  return (
    <SafeArea>
      <View style={{ backgroundColor: "#E7F4F2" }}>
        <Spacer position="" size="large">
          <FlatList
            data={[
              { name: 1 },
              { name: 2 },
              { name: 3 },
              { name: 4 },
              { name: 5 },
            ]}
            renderItem={({ item }) => (
              <Spacer position="top" size="large">
                <StorecartInfoCard storecart={item} />
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
