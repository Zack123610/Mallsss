import React from "react";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { HistoryScreen } from "../../features/history/screens/history.screen";
import { StorecartScreen } from "../../features/storecart/screens/storecart.screen";
import { SafeArea } from "../../components/utility/safe-area.component";

const Tab = createBottomTabNavigator();

const Home = () => (
  <SafeArea>
    <Text>Home</Text>
  </SafeArea>
);
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const TAB_ICON = {
  Home: "home",
  Stores: "nav-icon-list-a",
  Saved: "favorite",
  History: "history",
  Settings: "player-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Fontisto name={iconName} size={size} color={color} />
    ),
    tabBarStyle: {
      backgroundColor: "#243D3A",
      height: 90,
      paddingTop: 8,
    },
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "#E7F4F2",
        inactiveTintColor: "#7FB4AC",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Stores" component={StorecartScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);
