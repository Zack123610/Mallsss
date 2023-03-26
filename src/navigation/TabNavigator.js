import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../components/Home';
// import Create from '../components/Create';
// import Profile from '../components/Profile';
// import TabBar from '../components/TabBar';
// import ProfileNavigator from './ProfileNavigator';
// import Home from '../components/Settings';
import TabBar from '../components/TabBar';
import SettingsNavigator from './SettingsNavigator';

import Home from '../screens/Home';
import List from '../screens/List';
import History from '../screens/History';
// import Saved from '../screens/Saved';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name='Home'
        component={Home}
        initialParams={{ icon: 'home' }}
      />
      
      <Tab.Screen
        name='List'
        component={List}
        initialParams={{ icon: 'bars' }}
      />
      <Tab.Screen
        name='History'
        component={History}
        initialParams={{ icon: 'retweet' }}
      />
      {/* <Tab.Screen
        name='Saved'
        component={Saved}
        initialParams={{ icon: 'book' }}
      /> */}
      <Tab.Screen
        name='Settings'
        component={SettingsNavigator}
        initialParams={{ icon: 'setting' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
