import React, {useState, useContext} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import themeContext from '../src/features/themeContext';

export default function Homepage({navigation}) {
    const theme = useContext(themeContext);
    
    return (
        <View style={[styles.container,{backgroundColor: theme.background}]}>
            <Text style={[styles.text, {color: theme.color}]}>Theme</Text>
            <Button title='Second page' onPress={() => navigation.navigate("Settings")}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
    },
    text:{
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 20,
    }
})