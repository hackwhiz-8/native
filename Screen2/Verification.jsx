import { StyleSheet, Text, Image, View, TextInput } from 'react-native'
import React from 'react'
import ButtonTab from '../component2/ButtonTab'

const Verification = () => {
    return (
        <View style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#F2F2F3',
            marginTop: 80
        }}>
            <Image source={require('../assets2/icon_10/icon1.png')}
                style={{
                    width: 108,
                    height: 108
                }}
            />
            <View style={{ marginTop: 20 }}>
                <Text style={{ color: '#111B34', fontSize: 24, fontWeight: 'semibold', fontFamily: 'Montserrat', textAlign: 'center', marginTop: 5 }}>
                    OTP Verification
                </Text>
                <Text style={styles.text}>
                    A 6-digit verification code was just sent to ●●●●●●@gmail.com
                </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 25 }}>
                <TextInput style={styles.input}
                    maxLength={1}
                    keyboardType='numeric'
                />
                <TextInput style={styles.input}
                    maxLength={1}
                    keyboardType='numeric'
                />
                <TextInput style={styles.input}
                    maxLength={1}
                    keyboardType='numeric'
                />
                <TextInput style={styles.input}
                    maxLength={1}
                    keyboardType='numeric'
                />
                <TextInput style={styles.input}
                    maxLength={1}
                    keyboardType='numeric'
                />
                <TextInput style={styles.input}
                    maxLength={1}
                    keyboardType='numeric'
                />


            </View>
            <Text style={{ marginTop: 20, color: '#EF7749' }}>Resent in 30sec</Text>
            <View style={{ marginTop: 190 }}>
                <ButtonTab text={"Verifty"} color={"#EF7749"} path={"createProfile"} />
            </View>


        </View>
    )
}

export default Verification


const styles = StyleSheet.create({
    text: {
        color: '#7E868C',
        fontSize: 18,
        fontWeight: 'semibold',
        fontFamily: 'Montserrat',
        margin: 10,
        marginLeft: 50,
        marginRight: 50,
        textAlign: 'center'
    },
    input: {

        color: '#111B34',
        height: 60,
        marginLeft: 10,
        paddingLeft: 10,
        padding: 15,
        borderRadius: 15,
        backgroundColor: '#fff'
    },
    absText: {
        position: 'absolute',
        color: '#7E868C',
        left: 40,
        top: -10,
        fontSize: 14
    }
})