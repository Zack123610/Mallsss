import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FlatList } from "react-navigation";
import { setGlobalState, useGlobalState } from "../hooks/Cart"
import { Entypo } from '@expo/vector-icons'; 

const CartScreen = () => {
    const [cart] = useGlobalState('cart');

    const ItemView = ({item}) => {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: `${item.storeDetails.image}`}}/>
                <View style={{flex: 1, flexDirection: "row", alignSelf: "center"}}>
                    <Text style={styles.text}>
                        {item.storeName}
                    </Text>
                    
                </View>
                <TouchableOpacity 
                    onPress={() => {
                        cart.splice(cart.indexOf(item), 1)
                        const filteredCart = [...cart]
                        setGlobalState('cart', filteredCart)
                }}>
                    <Entypo style={{marginTop: 20, marginRight: 10}} name="circle-with-cross" size={24} color="black" />
                </TouchableOpacity>
            </View>
        )
    }

    return(
        <View style={{flex: 1}}>
            <TouchableOpacity 
                onPress={() => {
                    setGlobalState('cart', [])
            }}>
                <Text style={{textAlign: "right", margin: 10, fontSize: 16}}>Clear Cart</Text>
            </TouchableOpacity>
            {Object.keys(cart).length > 0 ? 
                <View style={{flex: 1}}>
                    <FlatList
                        data={cart}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={ ItemView }
                    />
                    <TouchableOpacity
                        style={styles.go}
                        onPress={()=>{}}
                        >
                        <Text style={{ margin: 10, fontSize: 16, alignSelf: "center" }}>Go!</Text>
                    </TouchableOpacity>
                </View>
                : <Text style={{ fontSize: 16, alignSelf: "center"}}>Store Cart is Empty!!</Text>
            }
            
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flexDirection: "row",
        backgroundColor: "red",
        justifyContent: "space-between",
        borderRadius: 150/2,
        margin: 5
    },
    image:{
        alignSelf: "flex-start",
        width: 60,
        height: 60,
        borderRadius: 60/2,
        margin: 5
    },
    text:{
        fontSize: 16,
        borderRadius: 50,
        margin: 5
    },
    go:{
        alignSelf: "center",
        backgroundColor: "green",
        height: 40,
        width: 100,
        borderRadius: 40/2,
        margin: 5
    }
});

export default CartScreen;