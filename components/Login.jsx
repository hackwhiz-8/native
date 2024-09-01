import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native'
import React from 'react'
import { imagrPath } from './imagesPath'

const Login = (props) => {
    return (
        <View>
            <View style={styles.circle}></View>
            <View style={styles.circle2}></View>

            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 80 }}>
                <Text style={{ fontSize: 40, color: '#5A4FCF', right: 22, fontWeight: '600', marginBottom: 20 }}>Login</Text>
                <Image source={imagrPath.uri} style={{ width: 300, height: 300 }} />
                <TextInput
                    style={styles.input}
                    placeholder="useless placeholder"
                    keyboardType="numeric"
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={{
                        textAlign: "center",
                        color: 'white',
                        fontWeight: '500',
                        fontSize: 20,
                        padding: 10
                    }}
                    onPress={()=>props.navigation.navigate("Home")}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 30, marginTop: 30 }}>
                <Text style={{ color: 'black', fontSize: 15 }}>Or login with</Text>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                    <Image source={imagrPath.handl1e} style={{ width: 30, height: 30 }} />
                    <Image source={imagrPath.handle3} style={{ width: 30, height: 30 }} />
                    <Image source={imagrPath.handle2} style={{ width: 30, height: 30 }} />

                </View>
                <View></View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    input: {
        color: 'black',
        fontSize: 18,
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#5A4FCF',
        opacity: 0.8
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#5A4FCF',
        // opacity: 0.6,
        borderRadius: 15,

        width: 300,
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 99,
        backgroundColor: 'blue',
        opacity: 0.4,
        position: 'absolute',
        right: 20,
        top: -60
    },
    circle2: {
        width: 120,
        height: 120,
        borderRadius: 99,
        backgroundColor: 'blue',
        opacity: 0.4,
        position: 'absolute',
        bottom: -100,
        left: -40
    }
});