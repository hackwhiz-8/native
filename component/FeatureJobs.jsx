import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ImageComponent from './ImageComponent';

const FeatureJobs = () => {

    const [chk, setchk] = useState(0);


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
    ]

    return (
        <View>
            <View style={styles.head}>
                <Text style={{ fontSize: 16, color: 'white' }}>Features Jobs</Text>
                <Text style={{ color: '#47A0FF' }}>View all</Text>
            </View>

            <FlatList
                horizontal
                data={data}
                renderItem={({ item, index }) => (
                    <Pressable style={[{
                        width: 270, flex: 1, gap: 40, margin: 10, padding: 15, borderRadius: 8, paddingTop: 20, paddingBottom: 20

                    }, chk === item.id ? { backgroundColor: '#47A0FF' } : { backgroundColor: '#E1F9FF' }]}
                        onPress={() => setchk(item.id)}
                    >


                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                <Image source={item.icons} style={{ width: 20, height: 20 }} />
                                <Text style={{ color: 'black', fontSize: 16, fontWeight: '700' }}>{item.company}</Text>
                            </View>
                            <ImageComponent item={item} />

                        </View>


                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ color: 'black', fontSize: 15, fontWeight: '700' }} >{item.name}</Text>
                                <Text style={{ color: 'black' }}>{item.desc}</Text>
                            </View>
                            <Text style={{ color: 'black', fontSize: 15, fontWeight: '700' }}>{item.salary}</Text>
                        </View>
                    </Pressable>
                )}
            />
        </View>
    )
}

export default FeatureJobs

const styles = StyleSheet.create({
    head: {
        display: 'flex',
        flexDirection: 'row', justifyContent: 'space-between',
        padding: 10
    }
})