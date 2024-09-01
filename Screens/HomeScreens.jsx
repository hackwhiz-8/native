import { Button, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import TabNavigation from '../component/TabNavigation';
import Header from '../component/Header';
import FeatureJobs from '../component/FeatureJobs';
import Recommended from '../component/Recommended';



const HomeScreens = () => {
    const navigation = useNavigation();
    return (

        <View style={{ backgroundColor: 'black', height: '100%' }}>
            <Header />

            <FlatList
                data={[1, 1]}
                renderItem={({ item, index }) => {
                    { index === 0 && <FeatureJobs /> }
                    { index == 1 && <Recommended /> }
                }}

            />

            <FeatureJobs />
            <Recommended />

        </View>
    )
}

export default HomeScreens

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        flex: 1,
        color: 'black',
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: 'gray'
    },

}
)