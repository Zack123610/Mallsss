import React, {useState, useContext} from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../src/features/themeContext';

export default function Settings() {
    const theme = useContext(themeContext);
    const [mode, setMode] = useState(false);
    return (
        <View style={[styles.container,{backgroundColor: theme.background}]}>
            <Text style={[styles.text, {color: theme.color}]}>Theme</Text>
            <Switch value = {mode} onValueChange={(value) => {
                setMode(value)
                EventRegister.emit("changeTheme", value);
                }}/>
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