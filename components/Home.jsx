import { View, Text } from 'react-native'
import React from 'react'
import Slider from './Slider'
import Upcoming from './Upcoming'
import ItemByCategory from './ItemByCategory'
import { ScrollView } from 'react-native-gesture-handler'

const Home = () => {
  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
      <Slider />
      <Upcoming />
      <ItemByCategory />
    </ScrollView>
  )
}

export default Home