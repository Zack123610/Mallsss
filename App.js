import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UpdatePassword from './src/screens/UpdatePassword';
import HomePage from "./src/screens/HomePage";
import TabNavigator from "./src/screens/TabNavigator";


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const navigator = createStackNavigator(
  {
    Home: HomePage,
    Update: UpdatePassword,
    Navigator: TabNavigator
  },
  {
    initialRouteName: "Navigator", //which component to show first
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);