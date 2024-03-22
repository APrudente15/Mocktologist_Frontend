import React from 'react'
import { Text, Image, View, Touchable } from 'react-native'
import styles from '../style'
import { TouchableOpacity } from 'react-native-gesture-handler'

function DrinkThumbnail({body, image, name, rating, tastes, vegan}) {
  return (
    <TouchableOpacity style={styles.dashBox}>
        <Text style={[styles.heading, { fontSize: 20 }]}>{name} <Text style={{ color: '#A9ED91'}}>{vegan ? 'v' : ''}</Text></Text>
        <Text style={[styles.heading, { fontSize: 16}]}>Taste Profile: {tastes}</Text>
        <Image source={{uri: `https://www.maryswholelife.com/wp-content/uploads/2023/04/Lemon-Blueberry-Mocktail-09-scaled.jpg`}} style={styles.drinkThumbnailImage}/>
    </TouchableOpacity>
  )
}

export default DrinkThumbnail