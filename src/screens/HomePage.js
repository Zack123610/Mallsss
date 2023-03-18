import React, { useContext } from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";
import style from '../css/UpdatePassword.css'
import themeContext from "../config/theme/themeContext";

const HomePage = ({navigation}) => {
    const theme = useContext(themeContext);

    return(
        <View >
            <Text>HomePage</Text>
            <Text className = {[style.settingHeader, {backgroundColor: theme.brand.primary}]}>Settings</Text>
            <Button style = {[styles.container, {backgroundColor: theme.bg}]} 
                title="Settings" onPress={()=> navigation.navigate("Settings")}></Button>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        width: 20,
        height: 10
    }
});

export default HomePage;