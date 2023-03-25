import React, {useState, useContext} from 'react';
import { View, Text, Switch, StyleSheet, Button } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../src/features/themeContext';

export default function Settings({navigation}) {
    const theme = useContext(themeContext);
    const [mode, setMode] = useState(theme.background == "#243D3A"? true:false);
    
    return (
        <View style={[styles.container,{backgroundColor: theme.background}]}>
            <Text style={[styles.text, {color: theme.text.primary}]}>Theme</Text>
            <Switch value = {mode} 
                onValueChange={(value) => {
                setMode(value)
                EventRegister.emit("changeTheme", value);
                }}/>

            <Button title='Second page' onPress={() => navigation.navigate("Homepage")}/>
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