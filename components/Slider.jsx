import { View, Text, Pressable, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Video } from 'react-native-video'


export default function Slider() {

    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            setloading(true)
            const url = 'https://api.jikan.moe/v4/anime';
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setdata(result.data);
            console.warn(data);
            setloading(false)
        } catch (error) {
            console.error("Error occurred:", error);
        }
    }

    return (
        <View
        >
            <Text style={{
                margin: 10,
                color: 'white',
                fontSize: 30
            }}>
                Trending
            </Text>
            <FlatList
                data={data}
                horizontal={true}
                refreshing={loading}
                onRefresh={fetchData}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <TouchableOpacity  >
                        <View key={index} style={{ borderWidth: 1, borderRadius: 15,margin:5,marginTop:20, backgroundColor: 'black' }} >

                            <Image
                                source={{ uri: item.images?.jpg?.large_image_url }}
                                style={styles.SliderImage}

                            />

                            {/* <Text style={{ fontSize: 16, color: 'white', textAlign: 'center', padding: 10, fontSize: 20, }}>{item.attributes?.slug}</Text> */}
                        </View>
                    </TouchableOpacity>
                )

                }
            />
        </View>
    )
}


const styles = StyleSheet.create({
    SliderImage: {
        width: 300,
        height: 200,
        borderRadius: 15,
        borderWidth:1,
        borderColor:'gray'


        // objectFit: 'contain'
    }
})