import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ButtonTab = (props) => {
    const navigation = useNavigation();
    return (

        <Pressable style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: "auto"
        }}
            onPress={() => navigation.navigate(props.path)}
        >
            <View style={[{
                width: 320,
                margin: 8,
                borderRadius: 10,

            },
            { backgroundColor: `${props.color}` }]} >
                <Text style={{
                    padding: 20,
                    fontSize: 16,
                    textAlign: 'center',
                    color: '#fff'
                }}>
                    {props.text}
                </Text>
            </View>
        </Pressable >

    )
}

export default ButtonTab

const styles = StyleSheet.create({})