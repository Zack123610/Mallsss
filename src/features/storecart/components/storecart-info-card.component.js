import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Fontisto } from "@expo/vector-icons";


const styles = StyleSheet.create({
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
});

import {
  StorecartCard,
  StorecartCardCover,
  Stores,
  Info,
  Section,
  SectionEnd,
} from "./storecart-info-card.styles";

//RMB TO SET SAVED AS AN EMPTY OBJECT otherwise it'll be undefined & break
export const StorecartInfoCard = ({ storecart = {} }) => {
  //setting this as default
  const {
    photo = "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    store = "Store A",
  } = storecart;

  return (
    <StorecartCard elevation={5}>
      <StorecartCardCover key={store} source={{ uri: photo }} />
      <Info>
        <Text variant="label">{store}</Text>
          <SectionEnd>
                <Text variant="caption" style={styles.underline}>
                  Go Again
                </Text>
          </SectionEnd>
      </Info>
    </StorecartCard>
  );
};