import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreens from '../Screens/HomeScreens'
import JobsScreen from '../Screens/JobsScreen'


const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (

        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                backgroundColor: 'black'
            }

        }}>
            <Tab.Screen name="Home" component={HomeScreens} options={{
                headerShown: false,
                tabBarIcon: () => (
                    <Image
                        source={require('../assets/welcomepage/home.png')}
                        style={{ width: 25, height: 25, tintColor: '#47A0FF' }}
                    />
                )
            }} />
            <Tab.Screen name="Jobs" component={JobsScreen} options={{
                tabBarIcon: () => (
                    <Image
                        source={require('../assets/welcomepage/bagTab.png')}
                        style={{ width: 25, height: 25, tintColor: '#47A0FF' }}
                    />
                )
            }}
            />
        </Tab.Navigator>

    )
}

export default TabNavigation

const styles = StyleSheet.create({})