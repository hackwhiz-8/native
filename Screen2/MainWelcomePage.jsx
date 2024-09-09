import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { withDecay } from 'react-native-reanimated'
import ButtonTab from '../component2/ButtonTab'

const MainWelcomePage = () => {
    return (
        <View style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 100
        }}>
            <Text style={{ fontSize: 30, color: 'black', fontWeight: '800', fontFamily: 'Montserrat', marginBottom: 40 }}>Welcome To </Text>
            <Image source={require('../assets2/welcome/welcome1.png')} style={{ width: 250, height: 250 }} />
            <Text style={{ color: 'black', fontSize: 16, margin: 30, textAlign: 'center' }}><Text style={{ fontWeight: '700' }}>Gear on the Go</Text> is an app that lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna!</Text>

            <View style={{ marginTop: 50 }}>
                <ButtonTab text={"Get Started"} color={"#EF7749"} path={"tabNav"} />
            </View>
        </View>
    )
}

export default MainWelcomePage

const styles = StyleSheet.create({})