import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
export const HistoryDropdown = ({ sortOption, setSortOption }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSortOption = (option) => {
    setSortOption(option);
    setDropdownVisible(false);
  };

  const dropdownOptions = [
    { label: "Most Recent", value: "Most Recent" },
    { label: "Least Recent", value: "Least Recent" },
    { label: "A-Z", value: "A-Z" },
  ];

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 4,
          paddingVertical: 5,
          paddingHorizontal: 20,
          marginLeft: 180,
          backgroundColor: "#fff",
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => setDropdownVisible(!dropdownVisible)}
      >
        <Text style={{ marginRight: 5 }}>Sort By - {sortOption} </Text>
        <MaterialIcons name="arrow-drop-down" size={24} color="#ccc" />
      </TouchableOpacity>
      {dropdownVisible && (
        <View
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            paddingVertical: 5,
            paddingHorizontal: 10,
            marginLeft: 180,
            position: "absolute",
            top: 35,
            left: 0,
            right: 16,
            backgroundColor: "#fff",
            zIndex: 1,
          }}
        >
          {dropdownOptions.map((option) => (
            <TouchableOpacity
              key={option.value}
              style={{ paddingVertical: 5 }}
              onPress={() => handleSortOption(option.value)}
            >
              <Text>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
