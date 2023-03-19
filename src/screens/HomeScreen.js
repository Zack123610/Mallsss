import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, View, Image } from "react-native";
import { FlatList } from "react-navigation";
import SearchBar from "../components/SearchBar";
import data from "../../data/stores.json";

const HomeScreen = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [term, setTerm] = useState('');

    useEffect(() => {
        getStores();
        return () => {
        }
    }, [])

    const getStores = () => {
        setFilteredData(data);
        setMasterData(data);    
    }
    
    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.storeName ? 
                                item.storeName.toUpperCase() 
                                : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData(newData);
        }
        else {
            setFilteredData(masterData);
        }
        setTerm(text);
    }
    
    const ItemView = ({item}) => {
        return (
            <View style={styles.store}>
                <Image style={styles.image} source={{ uri: `${item.storeDetails.image}`}}/>
                <Text style={styles.text}>
                    {item.storeName.toUpperCase()}
                </Text>
            </View>
        )
    }

    const ItemSeparatorView = () => {
        return (
            <View 
                style={{height: 0}}
            />
        )
    }

    return(
        <SafeAreaView>
            <View>
                <SearchBar
                    term={term}
                    onTermChange={(term) => searchFilter(term)}
                />
                <FlatList
                    data={filteredData}
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                />
            </View>
        </SafeAreaView>
    );
};

const styles=StyleSheet.create({
    text:{
        textAlign: "center"
    },
    store:{
        marginTop: 20,
        flex: 1/3,
        alignItems: "center"
    },
    image:{
        width: 100,
        height: 100,
        borderRadius: 10
    }
});

export default HomeScreen;