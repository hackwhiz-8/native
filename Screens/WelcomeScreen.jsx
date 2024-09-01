import { Button, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Card from '../component/Card';

const WelcomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={{ uri: 'https://media.istockphoto.com/id/1368965646/photo/multi-ethnic-guys-and-girls-taking-selfie-outdoors-with-backlight-happy-life-style-friendship.jpg?b=1&s=612x612&w=0&k=20&c=8varqjy2VLQHBm658rl2hS7MMakLA5iXd7Qvr7L8bx4=' }}
                    style={{ width: 400, height: 270, objectFit: 'contain' }} />
            </View>
            <View style={[styles.welcommDiv, styles.elevation]}>
                <Text style={{ color: 'white', fontSize: 30, fontWeight: '500', marginTop: 30 }}>Welcome!</Text>
                <Text style={{ color: 'gray', fontSize: 15, textAlign: 'center', margin: 15 }}>Choose one you're looking the new jobs or new employees</Text>
                <Card />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Tabs')} >
                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 20 }}> Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',

    },
    welcommDiv: {
        flex: 1,
        height: 500,
        backgroundColor: 'black',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        borderRadius: 25,
        bottom: 0,

    },
    button: {
        width: 320,
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 30,
        backgroundColor: '#47A0FF',

    }, elevation: {
        elevation: 20,
        shadowColor: '#fff',
    },


})