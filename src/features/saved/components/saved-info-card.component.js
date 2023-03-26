import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Fontisto } from "@expo/vector-icons";
import { Saved } from "../../../components/saved/saved.component";

const styles = StyleSheet.create({
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
});

import {
  SavedCard,
  SavedCardCover,
  Stores,
  Info,
  Section,
  SectionEnd,
} from "./saved-info-card.styles";

//RMB TO SET SAVED AS AN EMPTY OBJECT otherwise it'll be undefined & break
export const SavedInfoCard = ({ savedDetails = {} }) => {
  //setting this as default
  const {
    photo = "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    store = "Store A",
  } = savedDetails;

  return (
    <SavedCard elevation={5}>
      <View>
         <Saved savedDetails={savedDetails}/>
        <SavedCardCover key={store} source={{ uri: photo }} />
      </View>
      <Info>
        <Text variant="label">{store}</Text>
      </Info>
    </SavedCard>
  );
};
