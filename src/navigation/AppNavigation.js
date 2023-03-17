import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import UpdatePassword from '../screens/UpdatePassword';

export default function AppNavigator(){
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Homepage" component = {HomePage}/>
            <Stack.Screen name = "Settings" component = {Settings}/>
            <Stack.Screen name = "UpdatePassword" component = {UpdatePassword}/>
        </Stack.Navigator>
    )
}
