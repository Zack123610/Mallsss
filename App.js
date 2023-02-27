import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  function carparkOrMallHandler(carparkOrMall) {
    const choice = carparkOrMall;
    console.log(choice + "Clicked.");
  }

  return (
    <View style={styles.container}>
      <View>
        <Button title="Carpark" onPress={carparkOrMallHandler} />
        <Button title="Mall" onPress={carparkOrMallHandler} />
      </View>
    </View>
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

