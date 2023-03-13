import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens';
import RecommendationScreen from '../screens/RecommendationScreen';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='MallRecommendation' component={RecommendationScreen} />
    </Stack.Navigator>
  );
};
