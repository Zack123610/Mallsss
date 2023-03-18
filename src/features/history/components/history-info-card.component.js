import React from "react";
import { SvgXml } from "react-native-svg";

import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Spacer } from "../../../components/spacer/spacer.component";
//now import text from src and not from "react-native"
import { Text } from "../../../components/typography/text.component";
// import star from "../../../../assets/star";
// import open from "../../../../assets/open";
import { FlatList } from "react-native";
import historyDummyData from "../../../services/history/mock/historyDummyData.json"

const styles = StyleSheet.create({
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic'},
  underline: {textDecorationLine: 'underline'}
})

import {
  HistoryCard,
  HistoryCardCover,
  Stores,
  Info,
  Section,
  SectionEnd,
} from "./history-info-card.styles";

//inside small curly braces is what restaurant info
//is going to take
//RMB TO SET HISTORY AS AN EMPTY OBJECT otherwise it'll be undefined & break
export const HistoryInfoCard = ({ history = {} }) => {
  //destructuring
  //take properties from history object
  //setting this as default
  const {
    date = "2023-02-04 10:21:15",
    mall = "Some Mall",
    photo = "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    stores = ["Store A", "Store B","Store C"],
  } = history;

  return (
    <HistoryCard elevation={5}>
      <HistoryCardCover key={mall} source={{ uri: photo }} />
      <Info>
        <Text variant="subcaption" style={{ marginBottom: 5}}> {date} </Text>
        <Text variant="label" >{mall}</Text>
        <Section>
          <Spacer>
            {stores.map((store) => {
              return (
                  <Stores>{store}</Stores>
              );
            })}
          </Spacer>
          <SectionEnd>
            <Spacer>
            <TouchableOpacity
            onPress={() => {}} >
              <Text variant="caption" style={styles.underline}>Go Again</Text>
            </TouchableOpacity>
            </Spacer>
          </SectionEnd>
        </Section>
      </Info>
    </HistoryCard>
  );
};
