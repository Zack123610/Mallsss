import React, { useContext } from "react";
import styled from "styled-components/native";
import { Fontisto } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { SavedContext } from "../../services/saved/saved.context";

const SavedButton = styled(TouchableOpacity)`
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 9;
`;

export const Saved = ({ store }) => {
  const { saved, addToSaved, removeFromSaved } = useContext(SavedContext);

  const isSaved = saved.find((s) => s.placeId === store.placeId);
  return (
    <SavedButton
      onPress={() =>
        !isSaved
          ? addToSaved(store)
          : removeFromSaved(store)
      }
    >
      <Fontisto
        name={isSaved ? "bookmark-alt" : "bookmark"}
        size={30}
        color={isSaved ? "red" : "white"}
      />
    </SavedButton>
  );
};
