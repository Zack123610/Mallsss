import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {StatusBar} from 'react-native'
// import TabNavigator from './app/navigation/TabNavigator';
// import TabBarProvider from './app/contexts/TabBarProvider';
import TabNavigator from './src/navigation/TabNavigator';
import TabBarProvider from './src/contexts/TabBarProvider';
import ThemeProvider from './src/contexts/ThemeProvider';
import ThemeWrapper from './src/components/ThemeWrapper';
import CustomStatusBar from './src/components/CustomStatusBar';

import CarparkOrMallScreen from './src/screens/CarparkOrMallScreen';
import Map from './src/screens/Map';
import ResultScreen from './src/screens/ResultScreen';
import Saved from './src/screens/Saved';
import DummyScreen from './src/screens/DummyScreen';
//create navigation stack
const Stack = createNativeStackNavigator();

export default function App() {
  // return (
  //   <TabBarProvider>
  //     <NavigationContainer>
  //       <TabNavigator />
  //     </NavigationContainer>
  //   </TabBarProvider>
  // );
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <CustomStatusBar />
        <TabBarProvider>
          {/* children */}
          <NavigationContainer screenOptions={{
            headerShown: false // <-- Set headerShown to false
          }}>
            {/* <Stack.Navigator> */}
            {/* <Stack.Screen name="CarparkOrMallScreen" component={CarparkOrMallScreen} />
              <Stack.Screen name="Map" component={Map} />
              <Stack.Screen name="ResultScreen" component={ResultScreen} /> */}
            {/* <Stack.Screen name="DummyScreen" component={DummyScreen} /> */}
            {/* </Stack.Navigator> */}
            <TabNavigator />
          </NavigationContainer>
          {/* end of children */}
        </TabBarProvider>

      </ThemeWrapper>
    </ThemeProvider>
  );

}
