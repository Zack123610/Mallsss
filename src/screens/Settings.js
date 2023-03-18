import React, { useState, useContext} from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity, Image, Switch} from "react-native";
import Toggle from 'react-native-toggle-input'
import style from '../css/Settings.css'

// for theming
import { EventRegister } from 'react-native-event-listeners'
import themeContext from "../config/theme/themeContext";


const Settings = ({navigation}) => {
    const theme = useContext(themeContext);
    // false means light (default)
    const [mode, setMode] = useState(false);

    return(
        <View>
            {/* <Button title ="Back" onPress={()=>navigation.navigate('Homepage')}/> */}
            <View>
                <Text className = {[style.settingHeader, {backgroundColor: theme.bg}]}>Settings</Text>
                <View>
                    <Image className = {style.settingIcon} source={require('../../assets/images/settings_Cog.png')} />
                </View>
            </View>
            <View>
                <TouchableOpacity className = {style.updatePasswordButton}
                    onPress={() => navigation.navigate('Homepage')} >
                    <Image className={style.updatePasswordIcon} source={require('../../assets/images/settings_UpdatePW.png')}/>
                    <Text className = {style.updatePasswordWord}>Update Password</Text>
                </TouchableOpacity>
            </View>
            
            <View className={style.themeBox}>
                
                <Image className={style.updatePasswordIcon} source={require('../../assets/images/settings_ThemeKey.png')}/>
                <Text className={style.themeWord}>Theme</Text>
                
            </View>
            <Switch 
                style = {style.themeSwitch}
                // trackColor={{false: '#767577', true: '#81b0ff'}}
                // thumbColor={mode ? '#f5dd4b' : '#f4f3f4'}
                // ios_backgroundColor="#3e3e3e"
                value = {mode} 
                onValueChange={(value) => {
                    setMode(value)
                    EventRegister.emit("changeTheme", value);
                }}
            />
        </View>
    );
};

const addStyle=StyleSheet.create({
});

export default Settings;