import React, { useState } from 'react'
import { Text, Image, View, Touchable, TouchableHighlight } from 'react-native'
import styles from '../style'
import { useNavigation } from '@react-navigation/native';

function DrinkThumbnail({ index, type, body, image, name, rating, tastes, vegan }) {

  const navigation = useNavigation();

  return (
    <View style={[styles.dashBox, { width: type === 'ranking' || type === 'current' ? 350 : 180, height: type === 'current' ? 300 : 180 }]}>
      <Text style={[styles.heading, { fontSize: 20 }]}>{type === 'ranking' && index + 1 + '.'} {name} <Text style={{ color: '#A9ED91' }}>{vegan ? 'v' : ''}</Text></Text>
      <Text style={[styles.heading, { fontSize: 16 }]}>Taste Profile: {tastes}</Text>
      <View>
        {type !== 'current' && <Image source={{ uri: 'https://www.maryswholelife.com/wp-content/uploads/2023/04/Lemon-Blueberry-Mocktail-09-scaled.jpg' }} style={styles.drinkThumbnailImage} />}
        {type === 'current' && <Image style={[styles.bartenderCurrent, { bottom: -10 }]} source={require('../assets/bartender.png')} />}
      </View>
      {type === 'current' && <TouchableHighlight style={styles.button} onPress={() => navigation.navigate("Steps")}>
        <Text style={styles.buttonText}>Recipe</Text>
      </TouchableHighlight>}
    </View>
  );
}

export default DrinkThumbnail