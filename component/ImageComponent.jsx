import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'


const ImageComponent = (props) => {
    const item = props.item;
    const [Save, setSave] = useState('')
    return (
        <Pressable onPress={() => setSave(!Save)}>
            <Image source={Save === true ?
                require('../assets/welcomepage/bookmarkblack.png') :
                require('../assets/welcomepage/bookmark.png')}
                style={{ width: 25, height: 25 }} />
        </Pressable>
    )
}

export default ImageComponent

const styles = StyleSheet.create({})