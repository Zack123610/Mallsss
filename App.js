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
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { Fontisto } from "@expo/vector-icons";

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
const Saved = () => (
  <SafeArea>
    <Text>Saved</Text>
  </SafeArea>
);

const TAB_ICON = {
  Home: "home",
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
    }
  };
};

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "#E7F4F2",
              inactiveTintColor: "#7FB4AC",
            }}
          >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Saved" component={Saved} />
            <Tab.Screen name="History" component={HistoryScreen} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
