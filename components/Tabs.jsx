import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './Home';
import Login from './Login';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();
const Tabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{

            }}>
                <Tab.Screen name="mohit" component={Home} />
                <Tab.Screen name="Settings" component={Login} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Tabs