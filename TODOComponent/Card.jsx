import { StyleSheet, Pressable, Modal, TextInput, Image, Text, View } from 'react-native'
import React, { useState } from 'react'

const Card = (props) => {
    const item = props.item
    const [Status, setStatus] = useState(false)
    const [editedText, setEditedText] = useState(item.task)
    const [modalVisible, setModalVisible] = useState(false);

    const handleDelete = (id) => {

        fetch(`https://sheetdb.io/api/v1/cmt0o55gau3l3/id/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => console.warn("Deleted", data));

    }


    const handleEdit = (id) => {

        fetch(`https://sheetdb.io/api/v1/cmt0o55gau3l3/id/${id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: {
                    'id': id,
                    'task': editedText,
                    'status': Status

                }
            })
        })
            .then((response) => response.json())
            .then((data) => console.warn('edited', data));

        setModalVisible(!modalVisible);
    }

    return (
        <Pressable style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 30,
            margin: 10,
            borderWidth: 1,
            borderColor: 'gray',
            padding: 15,
            borderRadius: 10, justifyContent: 'space-between'
        }} onPress={() => setModalVisible(true)} >

            <Pressable onPress={() => setStatus(true)}>
                <Image source={Status === false ?
                    require('../TODOComponent/assests/undone.png') :
                    require('../TODOComponent/assests/done.png')}
                    style={{ width: 25, height: 20, }}
                />
            </Pressable>

            <Text style={[{ fontSize: 18, color: Status === true ? 'gray' : 'white' },]}>{item.task}</Text>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 30, marginRight: 10 }}>
                <Pressable onPress={() => setModalVisible(true)}>
                    <Image source={
                        require('../TODOComponent/assests/pencil.png')
                    }
                        style={{ width: 10, height: 20, padding: 10, }}
                    />
                </Pressable>
                <Pressable onPress={() => handleDelete(item.id)}>
                    <Image source={
                        require('../TODOComponent/assests/delete.png')
                    }
                        style={{ width: 10, height: 20, padding: 10 }}
                    />
                </Pressable>

            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={[styles.modalText, { fontWeight: '500' }]}>Edit Task</Text>
                        <TextInput
                            style={styles.input}
                            selectionColor={'orange'}
                            multiline={true}
                            numberOfLines={4} // Set the number of lines you want the text area to have
                            value={editedText}
                            onChangeText={(newText) => setEditedText(newText)}
                            placeholder="Enter your text here"
                        />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => handleEdit(item.id)}>
                            <Text style={styles.textStyle}>Update</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </Pressable>

    )
}

export default Card

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
        fontSize: 15,
        paddingHorizontal: 20
    },
    textStyleBtn: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15
    },
    modalText: {
        color: 'black',
        marginBottom: 5,
        textAlign: 'center',
        fontSize: 20
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

