import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import HomeScreens from './Screens/HomeScreens'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import JobsScreen from './Screens/JobsScreen'
import WelcomeScreen from './Screens/WelcomeScreen'
import TabNavigation from './component/TabNavigation'



const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer >

      <Stack.Navigator>
        <Stack.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={
            {
              headerShown: false
            }
          }
        />
        <Stack.Screen
          name='Tabs'
          component={TabNavigation}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>


    </NavigationContainer>
  )
}

export default App

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})