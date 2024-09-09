import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import ButtonTab from '../component2/ButtonTab'
import InputText from '../component2/InputText'

const LoginForm = () => {
    return (
        <ScrollView>
            <View style={{
                display: 'flex',
                alignItems: 'center'
            }} >
                <View style={{ marginBottom: 18 }}>
                    <Text style={{ color: '#111B34', fontSize: 24, fontWeight: 'semibold', fontFamily: 'Montserrat', textAlign: 'center', marginTop: 5 }}>
                        Welcome
                    </Text>
                    <Text style={styles.text}>
                        Enter your login details to access your account
                    </Text>
                </View>
                {/* form */}
                <View style={{ marginTop: 10 }}>
                    {/* email */}
                    <View style={{ display: "flex", alignItems: 'center' }}>
                        <InputText type={'text'} text={"Email"} icon={require('../assets2/loginform/message.png')} />
                        <InputText type={'text'} text={"Password"} icon={require('../assets2/loginform/lock.png')} />
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <TextInput keyboardType='numeric' />
                            <Text style={{ color: '#7E868C' }}>Remember me</Text>
                        </View>

                        <View>
                            <Text style={{ color: '#7E868C', fontSize: 14 }}>Forgot Password?</Text>
                        </View>
                    </View>

                    <ButtonTab text={"LOGIN"} color={'#EF7749'} path={"Verification"} />
                    <ButtonTab text={"GUEST USER"} color={'#00B164'} path={"Verification"} />



                </View>
            </View>
        </ScrollView>
    )
}

export default LoginForm

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