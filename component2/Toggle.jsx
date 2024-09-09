import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Toggle = (props) => {
    console.warn(props.toggle)
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#EBEBEB',
            marginTop: 20,
            margin: 20,
            width: 326,
            borderRadius: 16
        }}>
            <Pressable style={{ flex: 1 }} onPress={() => props.settoggle("Login")}>
                <Text style={props.toggle === "Login" ? styles.toggle : styles.font}>Login</Text>
            </Pressable >

            <Pressable style={{ flex: 1 }} onPress={() => props.settoggle("signup")}>
                <Text style={props.toggle === "signup" ? styles.toggle : styles.font}>Sign Up</Text>
            </Pressable>

        </View>
    )
}

export default Toggle

const styles = StyleSheet.create({
    font: {
        color: 'black',
        padding: 16,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontWeight: 'semibold'
    },
    toggle: {
        color: 'black',
        padding: 16,
        fontSize: 16,
        textAlign: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        fontFamily: 'Montserrat,',
        fontWeight: 'semibold'
    }
})