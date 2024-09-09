import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomePage from './Screen2/WelcomePage'
import Login from './Screen2/Login'
import Verification from './Screen2/Verification'
import Forgot from './Screen2/Forgot'
import Reset from './Screen2/Reset'
import CreateProfile from './Screen2/CreateProfile'
import MainWelcomePage from './Screen2/MainWelcomePage'
import TabNavigation from './component/TabNavigation'
import Welcome from './TODOComponent/Welcome'
import Home from './TODOComponent/Home'
import Modal from './TODOComponent/Modal'



const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer >

      <Stack.Navigator screenOptions={

        {
          headerShown: false,

        }

      }>
        {/* <Stack.Screen name="Home" component={WelcomePage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="createProfile" component={CreateProfile} />
        <Stack.Screen name="mainWelcome" component={MainWelcomePage} />
        <Stack.Screen name="resetPass" component={Reset} />
        <Stack.Screen name="forgotPass" component={Forgot} />
        <Stack.Screen name='tabNav'  component={TabNavigation} /> */}
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="Modal" component={Modal} />

      </Stack.Navigator>


    </NavigationContainer >
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

// import HomeScreens from './Screens/HomeScreens'
// import JobsScreen from './Screens/JobsScreen'
// import WelcomeScreen from './Screens/WelcomeScreen'
// import TabNavigation from './component/TabNavigation'

{/* <Stack.Screen
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
        /> */}