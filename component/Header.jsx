import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <>
            <View>
                <Text style={{ color: 'white', margin: 10, marginLeft: 22, fontSize: 25, marginTop: 40, fontWeight: '500' }}>Find your dream jobs!</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                    style={styles.input}

                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="ex: webDeveloper"
                    keyboardType="text"
                />
                <Pressable style={{ backgroundColor: '#47A0FF', padding: 6, borderRadius: 10, marginRight: 10 }}>
                    <Image source={require('../assets/welcomepage/search.png')} style={{ width: 25, height: 25 }} />
                </Pressable>
            </View>
        </>
    )
}

export default Header
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        flex: 1,
        color: 'gray',
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        // backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: 'gray'
    },

}
)