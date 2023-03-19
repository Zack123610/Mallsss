import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "../navigation/Tabs";

const TabNavigator = () => {
    return(
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    );
};

export default TabNavigator;