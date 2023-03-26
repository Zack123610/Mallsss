import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import UpdatePassword from '../screens/UpdatePassword';
import Settings from '../screens/Settings';

const Stack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true, title: '' }}>
      <Stack.Screen name='Settings' component={Settings} />
      <Stack.Screen name='UpdatePassword' component={UpdatePassword} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SettingsNavigator;
