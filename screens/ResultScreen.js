import { View, Text, StyleSheet, FlatList, Image } from "react-native";

// import { MEALS } from "../data/dummy-data";
// import { MallItem } from "../components/MallItem";

import app from "../data/dummy-data.json"


const StoreItem = ({ storeName, imageUrl }) => (
    <View style={styles.storeItem}>
        <View style={styles.innerContainer}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{storeName}</Text>
        </View>
    </View>
);

function renderStoreItem({ item }) {
    return(
        <StoreItem storeName={item.storeName} imageUrl={item.imageUrl}/>
    );
}

function ResultScreen(){
    const DATA = [ app.Mcdonalds["Vivo City"], app.Watson["Vivo City"], app["NTUC FairPrice"]["Vivo City"] ]
    return (
        <FlatList
            data={DATA} 
            renderItem={renderStoreItem}
            keyExtractor={(item) => item.id}
        />
    );
}

// function ResultScreen({ route }) {
//     const catId = route.params.categoryId;

//     const displayedMeals = MEALS.filter((mealItem) => {
//         return mealItem.categoryIds.indexOf(catId) >= 0;
//     });

//     function renderMealItem(itemData) {
//         return (<MealItem title={itemData.item.title} /* imageUrl={itemData.item.imageUrl} */ />);
//     };

//     return (
//         <View style={StyleSheet.container}>
//             <FlatList data={displayedMall} keyExtractor={(item) => item.id} renderItem={renderMallItem}/>
//         </View>
//     );
// };

export default ResultScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    storeItem: {
        flex: 1,
        margin: 16,
        height: 150,
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
})

