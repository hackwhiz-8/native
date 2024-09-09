import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import ButtonTab from '../component2/ButtonTab'
import InputText from '../component2/InputText'

const SignUpForm = () => {
    return (
        <View style={{
            display: 'flex',
            alignItems: 'center'
        }} >
            <View style={{ marginBottom: 18 }}>
                <Text style={{ color: '#111B34', fontSize: 24, fontWeight: 'semibold', fontFamily: 'Montserrat', textAlign: 'center', marginTop: 5 }}>
                    Welcome
                </Text>
                <Text style={styles.text}>
                    Enter your details to create your account
                </Text>
            </View>
            {/* form */}
            <View style={{ marginTop: 10 }}>
                {/* email */}
                <View style={{ display: "flex", alignItems: 'center' }}>
                    <InputText type={"text"} text={"Email"} icon={require('../assets2/loginform/message.png')} />
                    <InputText type={"text"} text={"Password"} icon={require('../assets2/loginform/lock.png')} />
                    <InputText type={"text"} text={"Confirm Password "} icon={require('../assets2/loginform/lock.png')} />

                </View>

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 20, marginBottom: 20 }}>
                    <Image source={require('../assets2/loginform/check-mark.png')} style={{ width: 20, height: 20 }} />
                    <Text style={{ color: 'black', fontSize: 13, marginLeft: 5 }}> I agree with Privacy Policy & Terms & Conditions</Text>
                </View>

                <ButtonTab text={"SIGN UP"} color={'#EF7749'} path={"Verification"} />




            </View>
        </View>
    )
}

export default SignUpForm

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
        flex: 1,
        color: '#111B34',
        height: 40,
        marginLeft: 10,
        paddingLeft: 10,
        borderLeftWidth: 1,
        borderColor: '#EF7749'
    },
    absText: {
        position: 'absolute',
        color: '#7E868C',
        left: 40,
        top: -10,
        fontSize: 14
    }
})