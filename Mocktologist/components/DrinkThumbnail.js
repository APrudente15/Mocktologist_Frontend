import React, { useState } from 'react'
import { Text, Image, View, Touchable, TouchableHighlight, Modal } from 'react-native'
import { DrinkDetailsPopup } from '../components'
import styles from '../style'
import { TouchableOpacity } from 'react-native-gesture-handler'

function DrinkThumbnail({ index, type, body, image, name, rating, tastes, vegan, navigation }) {

  const [showDetails, setShowDetails] = useState(false)

  const handleThumbnailPress = () => {
    if (type != 'current') {
      setShowDetails(true)
    }
  }

  const Details = () => (
    <Modal
      visible={showDetails}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setShowDetails(false)}
    >
      <View style={[styles.popupBox, {left: 30}]}>
        <TouchableHighlight style={{left: 140}}onPress={() => setShowDetails(false)}>
          <Text style={styles.popupButtonText}>X</Text>
        </TouchableHighlight>
        <Text>More details about the drink...</Text>
      </View>
    </Modal>
  )


  return (
    <View>
      {showDetails && <Details />}
      <TouchableOpacity style={[styles.dashBox, { width: type === 'ranking' || type === 'current' ? 350 : 180, height: type === 'current' ? 300 : 180 }]} onPress={() => handleThumbnailPress()}>
        <Text style={[styles.heading, { fontSize: 20 }]}>{type === 'ranking' && index + 1 + '.'} {name} <Text style={{ color: '#A9ED91' }}>{vegan ? 'v' : ''}</Text></Text>
        <Text style={[styles.heading, { fontSize: 16 }]}>Taste Profile: {tastes}</Text>
        <View>
          {type !== 'current' && <Image source={{ uri: 'https://www.maryswholelife.com/wp-content/uploads/2023/04/Lemon-Blueberry-Mocktail-09-scaled.jpg' }} style={styles.drinkThumbnailImage} />}
          {type === 'current' && <Image style={[styles.bartenderCurrent, { bottom: -10 }]} source={require('../assets/bartender.png')} />}
        </View>
        {type === 'current' && <TouchableHighlight style={styles.button} onPress={() => navigation.navigate("Steps")}>
          <Text style={styles.buttonText}>Recipe</Text>
        </TouchableHighlight>}
      </TouchableOpacity>
    </View>
  );
}

export default DrinkThumbnail