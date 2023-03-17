import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity} from "react-native";
import Toggle from 'react-native-toggle-input'


const Settings = ({navigation}) => {
    const [toggle, setToggle] = React.useState(false);
    
    return(
        <View>
            <View>
                <Text>Settings</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('UpdatePassword')} >
                    <Image source={require('./my-icon.png')} />
                    <Text>Update Password</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text>Theme</Text>
            </View>

        </View>
    );
};

const styles=StyleSheet.create({});

export default Settings;