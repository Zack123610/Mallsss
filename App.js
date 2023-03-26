import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StatusBar} from 'react-native'
// import TabNavigator from './app/navigation/TabNavigator';
// import TabBarProvider from './app/contexts/TabBarProvider';
import TabNavigator from './src/navigation/TabNavigator';
import TabBarProvider from './src/contexts/TabBarProvider';
import ThemeProvider from './src/contexts/ThemeProvider';
import ThemeWrapper from './src/components/ThemeWrapper';
import CustomStatusBar from './src/components/CustomStatusBar';



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
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
          {/* end of children */}
        </TabBarProvider>

      </ThemeWrapper>
    </ThemeProvider>
  );

}
