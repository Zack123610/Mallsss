// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import UpdatePassword from './src/screens/UpdatePassword';
// import HomePage from "./src/screens/HomePage";

// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //       <Text>Open up App.js to start working on your app!</Text>
// //       <StatusBar style="auto" />
// //     </View>
// //   );
// // }

// const navigator = createStackNavigator(
//   {
//     Home: HomePage,
//     Update: UpdatePassword
//   },
//   {
//     initialRouteName: "Home", //which component to show first
//     defaultNavigationOptions: {
//       title: "App",
//     },
//   }
// );

// export default createAppContainer(navigator);

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

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
        <HistoryScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
