import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Welcome = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={{ color: 'black', fontSize: 18 }}>
                Get Started
            </Text>
            <Pressable style={{ backgroundColor: 'black', padding: 10, borderRadius: 8, marginTop: 20 }}
                onPress={() => navigation.navigate("Modal")}
            >

                <Text>
                    Make a Note
                </Text>
            </Pressable>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 820,
        backgroundColor: 'orange'
    }
})