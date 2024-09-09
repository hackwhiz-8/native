import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonTab from '../component2/ButtonTab'

const WelcomePage = () => {
    return (
        <View>
            <Image source={require('../assets2/image2.png')}
                style={{
                    width: 360,
                    height: 780,
                    objectFit: 'contain'
                }}
            />
            <View style={{
                width: 360,
                position: 'absolute',
                top: 510,
                backgroundColor: 'black',
                height: 300,
                paddingTop: 30,
                borderRadius: 30,

            }}>
                <ButtonTab text={'SignUp'} color={'#00B164'} path={"Login"} />
                <ButtonTab text={'Login'} color={'#EF7749'} path={"Login"}  />

            </View>
        </View>
    )
}

export default WelcomePage

const styles = StyleSheet.create({})