import React, { useState } from 'react'
import { Text, Image, View, Touchable } from 'react-native'
import styles from '../style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useOverlayPopup } from '../hooks/useOverlayPopup'

function DrinkThumbnail({ index, type, body, image, name, rating, tastes, vegan }) {

  const { showOverlay, setShowOverlay, showThumbnailPopup, setShowThumbnailPopup } = useOverlayPopup()

  const handleThumbnailPress = () => {
    setShowOverlay(true);
    setShowThumbnailPopup(true);
  }

  return (
    <View>
      {showOverlay && <Overlay />}
      {showThumbnailPopup && <Popup2 />}
      <TouchableOpacity style={[styles.dashBox, { width: type === 'ranking' ? 350 : 180 }]} onPress={handleThumbnailPress}>
        <Text style={[styles.heading, { fontSize: 20 }]}>{type === 'ranking' && index + 1 + '.'} {name} <Text style={{ color: '#A9ED91' }}>{vegan ? 'v' : ''}</Text></Text>
        <Text style={[styles.heading, { fontSize: 16 }]}>Taste Profile: {tastes}</Text>
        <Image source={{ uri: `https://www.maryswholelife.com/wp-content/uploads/2023/04/Lemon-Blueberry-Mocktail-09-scaled.jpg` }} style={styles.drinkThumbnailImage} />
      </TouchableOpacity>
    </View>
  );
}

export default DrinkThumbnail