import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import user from '../assets/welcomepage/user.png'
import bag from '../assets/welcomepage/bagIcon.png'
import CardItem from './CardItem'

const Card = () => {
    const [chk, setchk] = useState(0)
    const data = [
        {
            id: 1,
            icons: require('../assets/welcomepage/bagIcon.png'),
            name: 'Find a Job',
            desc: 'description',
        },
        {
            id: 2,
            icons: require('../assets/welcomepage/user.png'),
            name: 'Hire a Employee',
            desc: 'description',
        }
    ]
    return (

        <FlatList style={styles.container}
            data={data}
            renderItem={({ item, index }) => (
                <Pressable style={[{
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
                }, chk === item.id ? { backgroundColor: '#FFE79D' } : { backgroundColor: '#E1F9FF' }

                ]}
                    onPress={() => setchk(item.id)}

                >
                    <Image source={item.icons} style={{ width: 20, height: 30, borderRadius: 99, padding: 15 }} />
                    <View style={{ display: 'flex' }}>

                        <Text style={{ color: 'black', fontSize: 16, fontWeight: '600' }}>{item.name}</Text>
                        <Text style={{ color: 'black' }}>{item.desc}</Text>

                    </View>

                </Pressable >
            )}
        />

    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        flex: 1,


        marginTop: 30
    }

})