import { Image, StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import InputText from '../component2/InputText'
import ButtonTab from '../component2/ButtonTab'

const CreateProfile = (props) => {
    return (
        <View style={{
            display: 'flex',
            alignItems: 'center',
        }}>
            <View style={{ marginTop: 60 }}>

                <Text style={{ color: 'black', fontSize: 22, fontWeight: '700', fontFamily: 'Montserrat', marginBottom: 50 }}>CreateProfile</Text>

                <Image source={require('../assets2/user/group1.png')} style={{ width: 114, height: 114 }} />
                <View style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', marginTop: 20, padding: 10, borderRadius: 10, alignItems: 'center', gap: 10 }}>
                    <Image source={require('../assets2/pen/pen1.png')} style={{ width: 15, height: 15 }} />
                    <Text style={{ color: 'black' }}>Add Photo</Text>
                </View>
            </View>
            <View style={{ marginTop: 70 }}>
                <InputText type={'text'} text={"Name"} icon={require('../assets2/loginform/message.png')} />
            </View>


            <View style={{ marginTop: 190 }}>
                <ButtonTab text={"Verifty"} color={"#EF7749"} path={"mainWelcome"} />
            </View>


        </View>
    )
}

export default CreateProfile

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