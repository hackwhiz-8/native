import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Home = () => {
    const [Task, setTask] = useState('')
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ color: 'black' }}>Home page</Text>
            <TextInput
                style={{ color: 'black', borderWidth: 1 }}
                multiline={true}
                numberOfLines={4} // Set the number of lines you want the text area to have
                value={Task}
                onChangeText={(newText) => setTask(newText)}
                placeholder="Enter your text here"
            />
            <Pressable>
                <Text style={{ color: 'black' }}>
                    Submit
                </Text>
            </Pressable>
        </View>
    )
}

export default Home



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {

        color: 'black',
        height: 100,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: 'gray'
    },

}
)