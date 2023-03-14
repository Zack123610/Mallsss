import * as React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Settings() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity>
                <Text>
                    Update Password
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>
                    Theme
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Settings;


