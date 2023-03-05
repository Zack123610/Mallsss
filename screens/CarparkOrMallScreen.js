import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

function CarparkOrMallScreen() {
    const [choice, setChoice] = useState('');
    const navigation = useNavigation();

    function mapSelectedHandler() {
        navigation.navigate('Map');
    }

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
                <View style={styles.optionContainer}><Button title="Carpark" onPress={mapSelectedHandler} /></View>
                <View style={styles.optionContainer}><Button title="Mall" onPress={mallChoiceHandler} /></View>
            </View>
        </View>
    );
}

export default CarparkOrMallScreen;

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