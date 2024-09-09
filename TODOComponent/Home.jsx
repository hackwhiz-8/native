import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import { ScrollView } from 'react-native-gesture-handler'

const Home = () => {

    const [Data, setData] = useState([])


    const getData = () => {
        fetch('https://sheetdb.io/api/v1/cmt0o55gau3l3')
            .then((response) => response.json())
            .then((data) => {
                setData(data)
                console.warn(data)
            });
    }
    useEffect(() => {
        getData();
    }, [])
    return (



        <FlatList
            data={Data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) =>
                <Card item={item} index={index} />
            }
        />


    )
}

export default Home

const styles = StyleSheet.create({})