import { View, Text, StyleSheet, FlatList } from "react-native";

// import { MEALS } from "../data/dummy-data";
// import { MallItem } from "../components/MallItem";

function ResultScreen(){
    return (
        <Text>Result Mall</Text>
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
})