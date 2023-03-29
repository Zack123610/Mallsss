import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
  position: relative;
  z-index: 1;
`;

export const StorecartCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  position: relative;
  z-index: 1;
`;

export const StorecartCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  position: relative;
  z-index: 1;
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: relative;
  z-index: 1;
`;

export const Stores = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.secondary};
  padding-top: ${(props) => props.theme.space[1]};
  position: relative;
  z-index: 1;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

// padding-top: ${(props) => props.theme.space[1]};
export const SectionEnd = styled.View`
  padding-bottom: ${(props) => props.theme.space[1]};
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
