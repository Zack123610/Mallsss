import React from "react";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.component";
//now import text from src and not from "react-native"
import { Text } from "../../../components/typography/text.component";
// import star from "../../../../assets/star";
// import open from "../../../../assets/open";

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
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    stores = ["Store A", "Store B", "Store C"],
  } = history;

  //Math.floor() to round down if rating is decimal
  //below code will produce an array w number of items as defined in ratings
  //const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <HistoryCard elevation={5}>
      <HistoryCardCover key={mall} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{mall}</Text>
        <Section>
          <Stores>{stores}</Stores>
          <SectionEnd>
            <Text variant="error">CLOSED TEMPORARILY</Text>
            <Spacer position="left" size="large">
              <Text variant="error">BUTTON HERE</Text>
            </Spacer>
          </SectionEnd>
        </Section>
      </Info>
    </HistoryCard>
  );
};
