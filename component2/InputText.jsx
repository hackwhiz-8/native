import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const InputText = (props) => {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: 300,
            marginBottom: 20,
            padding: 10,
            borderRadius: 10,
            backgroundColor: "#fff"
        }}>
            <Text style={styles.absText}>{props.text}</Text>
            <Image source={props.icon}
                style={{ width: 30, height: 30 }} />
            <TextInput
                style={styles.input}
                placeholder="ex: webDeveloper"
                keyboardType={props.type}
            />


        </View>
    )
}

export default InputText


const styles = StyleSheet.create({

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