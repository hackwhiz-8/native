import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

const CardItem = (props) => {

    const [chk, setchk] = useState(true)

    const item = props.item;
    return (
        <TouchableOpacity style={[{
            display: 'flex',
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#9AD1D4',
            width: 320,
            padding: 15,
            gap: 10,
            borderRadius: 10,
            margin: 5,
            backgroundColor: '#CCDBDC',
            elevation: 20,
            shadowColor: '#fff',
        }, chk === true ? { backgroundColor: '#82DE9D' } : { backgroundColor: '#CCDBDC' }

        ]}
            onPress={() => setchk((prev) => !prev)}

        >
            <Image source={item.icons} style={{ width: 30, height: 30, borderRadius: 99, padding: 15 }} />
            <View style={{ display: 'flex' }}>

                <Text style={{ color: 'black', fontSize: 16, fontWeight: '600' }}>{item.name}</Text>
                <Text style={{ color: 'black' }}>{item.desc}</Text>


            </View>
        </TouchableOpacity >
    )
}

export default CardItem

const styles = StyleSheet.create({

    card: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#9AD1D4',
        width: 320,
        padding: 15,
        gap: 10,
        borderRadius: 10,
        margin: 5,
        backgroundColor: '#CCDBDC',
        elevation: 20,
        shadowColor: '#fff',
    }
})