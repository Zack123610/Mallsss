import React, { useState, useEffect, StatusBar } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EventRegister } from 'react-native-event-listeners';
import Settings from './screens/Settings';
import Homepage from './screens/Homepage'
import theme from './src/features/Themes';
import themeContext from './src/features/themeContext';

const Stack = createNativeStackNavigator();

const App = () => {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
      setMode(data);
      console.log(data);
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  });

  return (
    <themeContext.Provider value = {mode === true ? theme.dark: theme.light}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Homepage"
            component = {Homepage}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
};

export default App;