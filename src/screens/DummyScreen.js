import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function DummyScreen() {
    const navigation = useNavigation();

    function mapSelectedHandler() {
        navigation.navigate('CarparkOrMallScreen',
        {
          resultMall: "Waterway Point",
          resultStores: ["McDonald's", "7-Eleven", "Adidas"],
        }
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.carparkOrMallContainer}>
                <View style={styles.optionContainer}><Button title="Dummy" onPress={mapSelectedHandler} /></View>
            </View>
        </View>
    );
}

export default DummyScreen;

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