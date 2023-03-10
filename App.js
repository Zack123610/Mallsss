import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CarparkOrMallScreen from './screens/CarparkOrMallScreen';
import Map from './screens/Map';
import ResultScreen from './screens/ResultScreen';

// import IconButton from './components/UI/IconButton';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="CarparkOrMallScreen" component={CarparkOrMallScreen} />
          {/* <Stack.Screen 
            name="Map" 
            component={Map} 
            options={({ navigation }) => ({
              headerRight: () => (
                <IconButton icon="done" size={24} color={'black'}
                  onPress={() => navigation.navigate('ResultScreen')} 
                />
              ),
            })}
          /> */}
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="ResultScreen" component={ResultScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});