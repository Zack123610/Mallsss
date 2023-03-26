import { View, Text, StyleSheet, FlatList, Image, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

// import app from "../data/dummy-data.json";
// import newdata from "../data/database.json";
import newdata from "../../data/database.json"

const StoreItem = ({ storeName, imageUrl, unitNumber, contact }) => (
    <View style={styles.storeItem}>
        <View style={styles.innerContainer}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{storeName}</Text>
            <Text style={styles.title}>{unitNumber}</Text>
            <Text style={styles.title}>{contact}</Text>
        </View>
    </View>
);

function renderStoreItem({ item }) {
    return(
        <StoreItem 
            storeName={item.storeName} 
            imageUrl={item.imageStore}
            unitNumber={item.unitNumber}
            contact={item.contact_number}
        />
    );
}

function findMallIndex(resultMall){
    var i;
    for (i=0; i<newdata.Malls.length; i++){
        if (newdata.Malls[i].mallId === resultMall) break;
    };
    return i;
}

function findStoreIndex(resultStore, storesInMall){
    var i;
    for (i=0; i<storesInMall.length; i++){
        if (storesInMall[i].storeName === resultStore) break;
    };
    return i;
}

function ResultScreen( {route} ){
    const navigation = useNavigation();
    const resultMall = route.params.resultMall;
    const resultStores = route.params.resultStores;

    function buttonPressHandler() {
        navigation.navigate('CarparkOrMallScreen');
    }

    const mallIndex = findMallIndex(resultMall);
    const storesInMall = newdata.Malls[mallIndex].stores;

    var dummy = [];
    var storeIndex;
    for (let x=0; x<resultStores.length; x++){
        storeIndex = findStoreIndex(resultStores[x], storesInMall);
        dummy.push(storesInMall[storeIndex]);
    }

    const DATA = dummy;
    return (
        <>
        <FlatList
            data={DATA}
            renderItem={renderStoreItem}
            // keyExtractor={(item) => item.id} 
        />
        <Button style={styles.button} title='DONE' onPress={buttonPressHandler} />
        </>
    );
}


export default ResultScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    storeItem: {
        flex: 1,
        margin: 16,
        height: 200,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    image: {
        width: '100%',
        height: 100,
    },
    button: {
        paddingTop: 16,
    }
})

