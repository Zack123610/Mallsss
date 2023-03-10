import { Button, StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

function CarparkOrMallScreen() {
    const navigation = useNavigation();

    function mapSelectedHandler() {
        navigation.navigate('Map');
    }

    function carparkChoiceHandler() {
        console.log("Carpark Clicked.");
    }

    return (
        <View style={styles.container}>
            <View style={styles.carparkOrMallContainer}>
                <View style={styles.optionContainer}><Button title="Carpark" onPress={carparkChoiceHandler} /></View>
                <View style={styles.optionContainer}><Button title="Mall" onPress={mapSelectedHandler} /></View>
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
    // flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  optionContainer: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc', //purple
    color: 'white' //text colour
  },
});