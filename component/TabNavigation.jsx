import { StyleSheet, Text, View, Image } from 'react-native'
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
                backgroundColor: 'black',
                height: 60,
                position: 'absolute',
                bottom: 10,
                left: 16,
                right: 16,
                borderRadius: 20,
                backgroundColor: '#000',
                borderWidth: 5,
                borderColor: '#47A0FF',
                justifyContent: 'center',
                alignItems: 'center'
            }

        }}>
            <Tab.Screen name="Home" component={HomeScreens} options={{
                headerShown: false,
                tabBarBadge: 1,
                tabBarShowLabel: false,
                tabBarBadgeStyle: {
                    color: 'black',
                    backgroundColor: '#47A0FF'
                },
                tabBarIcon: () => (
                    <Image
                        source={require('../assets/welcomepage/home.png')}
                        style={{ width: 25, height: 25, tintColor: '#fff' }}
                    />
                )
            }} />
            <Tab.Screen name="Jobs" component={JobsScreen} options={{
                tabBarBadge: 10,
                tabBarBadgeStyle: {
                    color: 'black',
                    backgroundColor: '#47A0FF'
                },
                tabBarShowLabel: false,
                tabBarIcon: () => (
                    <Image
                        source={require('../assets/welcomepage/bagnew.png')}
                        style={{ width: 25, height: 25, tintColor: '#fff', }}
                    />
                )
            }}
            />
            <Tab.Screen name="Job2" component={JobsScreen} options={{

                tabBarShowLabel: false,
                tabBarIcon: () => (
                    <Image
                        source={require('../assets/welcomepage/bagnew.png')}
                        style={{ width: 25, height: 25, tintColor: '#fff', }}
                    />
                )
            }}
            />
            <Tab.Screen name="Job1" component={JobsScreen} options={{
                tabBarBadge: 1,
                tabBarBadgeStyle: {
                    color: 'black',
                    backgroundColor: '#47A0FF'
                },
                tabBarShowLabel: false,
                tabBarIcon: () => (
                    <Image
                        source={require('../assets/welcomepage/bagnew.png')}
                        style={{ width: 25, height: 25, tintColor: '#fff', }}
                    />
                )
            }}
            />
        </Tab.Navigator>

    )
}

export default TabNavigation

const styles = StyleSheet.create({})