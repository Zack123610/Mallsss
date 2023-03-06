import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import style from '../css/UpdatePassword.css'

const UpdatePassword = () => {
    return(
        <View>
            <Text className={style.title}>Update Password</Text>
            <Button title="Confirm" onPress={()=> {}}/>
        </View>
    );
};

const styles=StyleSheet.create({});

export default UpdatePassword;