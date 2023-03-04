import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [choice, setChoice] = useState('');

  function carparkChoiceHandler() {
    console.log("Carpark Clicked.");
  }

  function mallChoiceHandler() {
    setChoice('Mall');
    console.log( choice + " Clicked.");
  }

  return (
    <View style={styles.container}>
      <View style={styles.carparkOrMallContainer}>
        <View style={styles.optionContainer}><Button title="Carpark" onPress={carparkChoiceHandler} /></View>
        <View style={styles.optionContainer}><Button title="Mall" onPress={mallChoiceHandler} /></View>
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
  carparkOrMallContainer: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  optionContainer: {
    margin: 4,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc', //purple
    color: 'white' //text colour
  },
});