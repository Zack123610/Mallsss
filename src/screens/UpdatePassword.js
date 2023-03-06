import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";
import style from '../css/UpdatePassword.css'

const UpdatePassword = () => {
    return(
        <View className={style.background}>
            <View>
                <Text className={style.title}>Update Password</Text>
                <View className={style.box}>
                    <View className={style.boxLine1}/>
                    <View className={style.boxLine2}/>
                    <View className={style.boxLine3}/>
                </View>
            </View>
            <View>
                {/* <Button title="Confirm" onPress={()=> {}}/> */}
                <TouchableOpacity className={style.confirmButton}>
                    <Text className={style.confirm}>Confirm</Text>
                </TouchableOpacity>
            </View>

            
        </View>
    );
};

const styles=StyleSheet.create({});

export default UpdatePassword;