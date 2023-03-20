import React from "react";
import { SvgXml } from "react-native-svg";

import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
// import open from "../../../../assets/open";
import { FlatList } from "react-native";
import historyDummyData from "../../../services/history/mock/historyDummyData.json";
import { Fontisto } from "@expo/vector-icons";

const TAB_ICON = {
  Saved: "favorite",
};

import {
  SavedCard,
  SavedCardCover,
  Stores,
  Info,
  Section,
  SectionEnd,
} from "./saved-info-card.styles";

//RMB TO SET SAVED AS AN EMPTY OBJECT otherwise it'll be undefined & break
export const SavedInfoCard = ({ saved = {} }) => {
  //setting this as default
  const {
    photo = "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    store = "Store A",
  } = saved;

  return (
    <SavedCard elevation={5}>
      <SavedCardCover key={store} source={{ uri: photo }} />
      <Info>
        <Text variant="label">{store}</Text>
        <Section>
          <SectionEnd>
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
          </SectionEnd>
        </Section>
      </Info>
    </SavedCard>
  );
};
