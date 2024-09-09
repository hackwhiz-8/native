import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Toggle from '../component2/Toggle'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

const Login = () => {
    const [toggle, settoggle] = useState('Login')
    return (
        <ScrollView>
            <View style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#F2F2F3',
                marginTop: 30
            }}>
                <Image source={require('../assets2/icon_10/icon1.png')}
                    style={{
                        width: 108,
                        height: 108
                    }}
                />
                <Toggle settoggle={settoggle} toggle={toggle} />
                {
                    toggle === "Login" && <LoginForm />
                }
                {
                    toggle === "signup" && <SignUpForm />
                }

            </View>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({})