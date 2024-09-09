import { StyleSheet, Text, TextInput, View, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import { sendData } from './Services';
import Home from './Home';

const ModalComponent = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [Task, setTask] = useState('')

    const handleChange = () => {
        const data1 = {
            id: Date.now(),
            task: Task,
            Date: Date.now(),
            status: 'f'
        }

        fetch('https://sheetdb.io/api/v1/cmt0o55gau3l3', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [
                    data1
                ]
            })
        })
            .then((response) => response.json())
            .then((data) => {
                setModalVisible(!modalVisible)
                console.warn(data)
            });

        ;
    }

    return (

        <View style={styles.centeredView}>


            <Text style={{ color: 'white', fontSize: 25, margin: 10, marginTop: 20, marginLeft: 20 }}>Todo List</Text>


            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                   
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{ color: 'black', fontSize: 25 }}>Add a task</Text>
                        <TextInput
                            style={styles.input}
                            multiline={true}
                            blurOnSubmit={true}
                            numberOfLines={4} // Set the number of lines you want the text area to have
                            value={Task}
                            onChangeText={(newText) => setTask(newText)}
                            placeholder="Enter your text here"
                        />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={handleChange}>
                            <Text style={styles.textStyle}>Submit</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>


            <Pressable
                style={{ backgroundColor: '#fb8500', padding: 20, margin: 10, borderRadius: 15 }}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyleBtn}>Add a Task </Text>
            </Pressable>

            <Home />




        </View>
    )
}

export default ModalComponent


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,

        backgroundColor: 'black',

    },
    modalView: {
        margin: 20,
        marginTop: 100,
        backgroundColor: '#fb8500',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        paddingTop: 30
    },
    button: {

        borderRadius: 12,
        padding: 15,
        elevation: 2,
        color: 'white',
        marginTop: 20,
        margin: 10,

    },
    buttonOpen: {
        backgroundColor: 'black',

    },
    buttonClose: {
        backgroundColor: '#000',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15
    },
    textStyleBtn: {
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    },
    modalText: {
        color: 'black',
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        width: 300,
        backgroundColor: 'black',
        color: 'white',
        height: 150,
        margin: 10,
        marginTop: 20,
        borderWidth: 1,
        padding: 10,
        fontSize: 18,
        borderRadius: 10,
        borderColor: 'gray',

    }
});
