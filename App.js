// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UpdatePassword from './src/screens/UpdatePassword';
import HomePage from "./src/screens/HomePage";
import Settings from "./src/screens/Settings";

import CarparkOrMallScreen from './src/screens/CarparkOrMallScreen';
import Map from './src/screens/Map';
import ResultScreen from './src/screens/ResultScreen';

import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// for theme
import { EventRegister } from 'react-native-event-listeners';
import theme from './src/config/theme/theme';
import themeContext from './src/config/theme/themeContext';

//create navigation stack
const Stack = createNativeStackNavigator();

export default function App(){
  const [mode, setMode] = useState(false);
  useEffect(() => {
    let eventListener = EventRegister.addEventListener("changeTheme", (data) => {
      setMode(data);
      console.log(data)
    });
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  });

  return (
    <themeContext.Provider value = {mode === true ? theme.dark : theme.light}>
      <NavigationContainer>
        <Stack.Navigator>
            {/* name is the variable to refer */}
            <Stack.Screen name = "Settings" component = {Settings}/>
            <Stack.Screen name = "Homepage" component = {HomePage}/>
            <Stack.Screen name = "UpdatePassword" component = {UpdatePassword}/>
            <Stack.Screen name="CarparkOrMallScreen" component={CarparkOrMallScreen} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="ResultScreen" component={ResultScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
};



// export default createAppContainer(navigator);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
