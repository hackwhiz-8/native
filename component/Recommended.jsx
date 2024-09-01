import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Recommended = () => {

    const [chk, setchk] = useState('');
    const data = [
        {
            id: 0,
            company: 'XYZ company',
            name: "UI/UX designer",
            icons: require('../assets/welcomepage/job.png'),
            salary: "$2500/month",
            desc: "role description"

        },
        {
            id: 1,
            company: 'XYZ company',
            name: "React developer ",
            icons: require('../assets/welcomepage/job.png'),
            salary: "$2500/month",
            desc: "role description"

        },
        {
            id: 2,
            company: 'XYZ company',
            name: "PHP developer",
            icons: require('../assets/welcomepage/job.png'),
            salary: "$2500/month",
            desc: "role description"

        },
        {
            id: 3,
            company: 'XYZ company',
            name: "Backend Developer",
            icons: require('../assets/welcomepage/job.png'),
            salary: "$2500/month",
            desc: "role description"

        },
        {
            id: 3,
            company: 'XYZ company',
            name: "Backend Developer",
            icons: require('../assets/welcomepage/job.png'),
            salary: "$2500/month",
            desc: "role description"

        },
        {
            id: 3,
            company: 'XYZ company',
            name: "Backend Developer",
            icons: require('../assets/welcomepage/job.png'),
            salary: "$2500/month",
            desc: "role description"

        },
        {
            id: 3,
            company: 'XYZ company',
            name: "Backend Developer",
            icons: require('../assets/welcomepage/job.png'),
            salary: "$2500/month",
            desc: "role description"

        },
        {
            id: 3,
            company: 'XYZ company',
            name: "Backend Developer",
            icons: require('../assets/welcomepage/job.png'),
            salary: "$2500/month",
            desc: "role description"

        },
        {
            id: 3,
            company: 'XYZ company',
            name: "Backend Developer",
            icons: require('../assets/welcomepage/job.png'),
            salary: "$2500/month",
            desc: "role description"

        },
    ]

    return (
        <View >
            <View style={styles.head}>
                <Text style={{ fontSize: 20, color: 'white', marginTop: 10, margin: 10 }}>Recommended for you</Text>
                <Text style={{ color: '#47A0FF' }}>View all</Text>
            </View>

           
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item, index }) => (
                        <Pressable style={[{
                            backgroundColor: '#EAF4FF',
                            flex: 1,
                            gap: 40,
                            margin: 8,
                            padding: 10,
                            borderRadius: 8,
                        },
                        chk === item.id ?
                            { backgroundColor: '#FFE79D' }
                            : { backgroundColor: '#E1F9FF' }]}
                            onPress={() => setchk(item.id)}
                        >

                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 15 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                                    <Image source={item.icons} style={{ width: 30, height: 30 }} />
                                    <View style={{ display: 'flex', gap: 3 }}>
                                        <Text style={{ color: 'black', fontSize: 15, fontWeight: '700' }} >{item.name}</Text>
                                        <Text style={{ color: 'gray', fontSize: 12, }}>{item.desc}</Text>
                                        <Text style={{ color: 'black', fontSize: 13, fontWeight: '500' }}>{item.salary}</Text>
                                    </View>
                                </View>
                                <Image source={require('../assets/welcomepage/arrow.png')} style={{ width: 25, height: 25, marginRight: 20 }} />
                            </View>


                        </Pressable>
                    )}
                />
           
        </View>
    )
}

export default Recommended
const styles = StyleSheet.create({
    head: {
        display: 'flex',
        flexDirection: 'row', justifyContent: 'space-between',
        padding: 10
    }
})