import { Button, StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

function CarparkOrMallScreen( {route} ) {
    const navigation = useNavigation();
    const resultMall = route.params.resultMall;
    const resultStores = route.params.resultStores;

    function mapSelectedHandler() {
      navigation.navigate('Map', {
        resultMall: resultMall,
        resultStores: resultStores,
      });
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