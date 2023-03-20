import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Navigation } from "./src/infrastructure/navigation";
import { SavedContextProvider } from "./src/services/saved/saved.context";

import {
  useFonts as useVastShadow,
  VastShadow_400Regular,
} from "@expo-google-fonts/vast-shadow";

import {
  useFonts as useLeagueSpartan,
  LeagueSpartan_300Light,
} from "@expo-google-fonts/league-spartan";

import { theme } from "./src/infrastructure/theme";
import { HistoryScreen } from "./src/features/history/screens/history.screen";
import { SavedScreen } from "./src/features/saved/screens/saved.screen";

import { SafeArea } from "./src/components/utility/safe-area.component";

export default function App() {
  const [vastShadowLoaded] = useVastShadow({
    VastShadow_400Regular,
  });

  const [leagueSpartanLoaded] = useLeagueSpartan({
    LeagueSpartan_300Light,
  });

  //while still loading, return null
  if (!vastShadowLoaded || !leagueSpartanLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <SavedContextProvider>
          <Navigation />
        </SavedContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
