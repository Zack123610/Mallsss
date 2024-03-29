import { View, Text, StyleSheet, FlatList, Image, Button } from "react-native";
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { db } from '../../config';
import { ref, set, onValue } from 'firebase/database';

import newdata from "../../data/database.json";

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

function addNewHistoryData(data, mallImage, resultMall, resultStores){
    const dummy1 = data.length;
    var today = new Date(); 
    var time = today.getFullYear() + "-"
                + String(today.getMonth()+1).padStart(2, '0') + "-"
                + String(today.getDate()).padStart(2, '0') + " "
                + today.getHours() + ":"  
                + today.getMinutes() + ":" 
                + today.getSeconds();

    console.log("Here the dummy1 length is: ", dummy1);
    set(ref(db, 'historyData/' + dummy1), {
        date: time,
        mall: resultMall,
        photo: mallImage,
        stores: resultStores
    });
    console.log("Here addNewHistory function is carried out.");
    return;
}

function ResultScreen( {route} ){
    const navigation = useNavigation();
    const [buttonPressed, setButtonPressed] = useState(false);
    const resultMall = route.params.resultMall;
    const resultStores = route.params.resultStores;

    const [toDoData, setToDoData] = useState([]);

    useEffect( () => {
        const pastHistoryData = ref(db, 'historyData');
        onValue(pastHistoryData, (snapshot) => {
            const result = snapshot.val();
            setToDoData(result);
        });
    }, []);

    console.log("The ToDoData here is: ", toDoData);

    const mallIndex = findMallIndex(resultMall);
    const mallImage = newdata.Malls[mallIndex].mallDetails.mallImage;
    const storesInMall = newdata.Malls[mallIndex].stores;

    var dummy = [];
    var storeIndex;
    for (let x=0; x<resultStores.length; x++){
        storeIndex = findStoreIndex(resultStores[x], storesInMall);
        dummy.push(storesInMall[storeIndex]);
    }
    const DATA = dummy;

    function buttonPressHandler() {
        console.log("Button is pressed! First time");
        addNewHistoryData(toDoData, mallImage, resultMall, resultStores);
        // navigation.navigate('DummyScreen'); Change this to HomePageScreen
    }

    const toggleIsSubmitted = () => {
        setButtonPressed(value => !value);
    };

    useEffect(() => {
    if (buttonPressed === true) {
        buttonPressHandler();
    }
    }, [buttonPressed]);

    return (
        <>
        <FlatList
            data={DATA}
            renderItem={renderStoreItem}
            // keyExtractor={(item) => item.id} 
        />
        <View>
            <Button style={styles.button} title='DONE' onPress={toggleIsSubmitted} />
        </View>
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

