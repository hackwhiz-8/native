import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const JobsScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={{ color: 'black' }}>Hey, I'm job Screen</Text>

        </View>
    )
}

export default JobsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }

}
)