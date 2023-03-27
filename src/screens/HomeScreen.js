import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, View, Image } from "react-native";
import { FlatList } from "react-navigation";
import SearchBar from "../components/SearchBar";
import {Picker} from '@react-native-picker/picker';
import { TouchableHighlight } from "react-native-gesture-handler";
import { setGlobalState, useGlobalState } from "../hooks/Global"
import data from "../../data/stores.json";

//const { useGlobalState } = createGlobalState({cart: []});

const HomeScreen = () => {
    const [categorisedData, setCategorisedData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [term, setTerm] = useState('');
    const [category, setCategory] = useState("All");
    const [cart] = useGlobalState('cart');

    useEffect(() => {
        getStores();
        return () => {
        }
    }, [])

    const getStores = () => {
        setCategorisedData(data);  
        setFilteredData(data);
        setMasterData(data);    
    }
    
    const searchFilter = (text) => {
        if (text) {
            const newData = categorisedData.filter((item) => {
                const itemData = item.storeName ? 
                                item.storeName.toUpperCase() 
                                : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData(newData);
        }
        else {
            setFilteredData(categorisedData);
        }
        setTerm(text);
    }
    
    const sortCategory = (value) => {
        if (value == "All") {
            setCategorisedData(masterData);
            setFilteredData(masterData);
        }
        else {
            const newData = masterData.filter((item) => {
                var match = false;
                item.storeDetails.category.filter((type) => {
                    if (type == value) match = true;
                })
                if (match == true) return true;
            });
            setCategorisedData(newData);
            setFilteredData(newData)
        }
        setCategory(value);
    }                        

    const ItemView = ({item}) => {
        return (
            <View style={styles.store}>
                <TouchableHighlight
                    onPress={() => 
                    {cart.indexOf(item) < 0 ? 
                        setGlobalState('cart', [...cart, item]) 
                        : null}}    
                >
                    <Image style={styles.image} source={{ uri: `${item.storeDetails.image}`}}/>
                </TouchableHighlight>
                <Text style={styles.text}>
                    {item.storeName.toUpperCase()}
                </Text>
            </View>
        )
    }

    const ItemSeparatorView = () => {
        return (
            <View style={{height: 0}}/>
        )
    }

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <SearchBar
                    term={term}
                    onTermChange={(term) => searchFilter(term)}
                />
                <Picker
                    selectedValue={category}
                    onValueChange={(itemValue) => sortCategory(itemValue)}
                    mode = 'dropdown'
                >
                    <Picker.Item label="All" value="All" />
                    <Picker.Item label="Amusement/Entertainment" value="Amusement/Entertainment" />
                    <Picker.Item label="Arts & Crafts" value="Arts & Crafts" />
                    <Picker.Item label="Bank & Money Changer" value="Bank & Money Changer" />
                    <Picker.Item label="Books & Stationery" value="Books & Stationery" />
                    <Picker.Item label="Children's Wear, Toys & Maternity" value="Children's Wear, Toys & Maternity" />
                    <Picker.Item label="Department Stores" value="Department Stores" />
                    <Picker.Item label="Electrical, Electronic, Camera & Telecommunication" value="Electrical, Electronic, Camera & Telecommunication" />
                    <Picker.Item label="Fashion Wear & Accessories" value="Fashion Wear & Accessories" />
                    <Picker.Item label="Food & Restaurants" value="Food & Restaurants" />
                    <Picker.Item label="Furniture, Furnishings and Household" value="Furniture, Furnishings and Household" />
                    <Picker.Item label="Gifts" value="Gifts" />
                    <Picker.Item label="Hair & Beauty" value="Hair & Beauty" />
                    <Picker.Item label="Jewellery & Watches" value="Jewellery & Watches" />
                    <Picker.Item label="Leather Goods, Bags & Shoes" value="Leather Goods, Bags & Shoes" />
                    <Picker.Item label="Music & Audio Visual" value="Music & Audio Visual" />
                    <Picker.Item label="Optical" value="Optical" />
                    <Picker.Item label="Pharmacy & Healthcare" value="Pharmacy & Healthcare" />      
                    <Picker.Item label="Schools & Offices" value="Schools & Offices" />                    
                    <Picker.Item label="Services" value="Services" />
                    <Picker.Item label="Sports & Leisure" value="Sports & Leisure" />
                    <Picker.Item label="Supermarket" value="Supermarket" />
                    <Picker.Item label="Toys & Collectibles" value="Toys & Collectibles" />
                </Picker>
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
        marginTop : 10,
        flex: 1/3,
        alignItems: "center",
        paddingBottom: 20
    },
    image:{
        width: 100,
        height: 100,
        borderRadius: 10
    }
});

export default HomeScreen;