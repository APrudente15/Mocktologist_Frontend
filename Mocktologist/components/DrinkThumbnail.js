import React from 'react'
import { Text, Image, View, Touchable } from 'react-native'
import styles from '../style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useOverlayPopup } from '../hooks/useOverlayPopup'

function DrinkThumbnail({ index, type, body, image, name, rating, tastes, vegan }) {

  const { showOverlay, setShowOverlay, showPopup, setShowPopup } = useOverlayPopup()

  const handlePopupPress = () => {
    setShowOverlay(false);
    setShowPopup(false);
  };

  const handleThumbnailPress = () => {
    setShowOverlay(true);
    setShowPopup(true);
  }

  const Overlay = () => {
    return <View style={styles.overlay} />;
  };

  const Popup2 = () => {
    return (
      <View style={styles.popupBox}>
        <TouchableOpacity style={styles.popupButton} onPress={handlePopupPress}>
          <Text style={styles.popupButtonText}>X</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      {showOverlay && <Overlay />}
      {showPopup && <Popup2 />}
      <TouchableOpacity style={[styles.dashBox, { width: type === 'ranking' ? 350 : 180 }]} onPress={handleThumbnailPress}>
        <Text style={[styles.heading, { fontSize: 20 }]}>{type === 'ranking' && index + 1 + '.'} {name} <Text style={{ color: '#A9ED91' }}>{vegan ? 'v' : ''}</Text></Text>
        <Text style={[styles.heading, { fontSize: 16 }]}>Taste Profile: {tastes}</Text>
        <Image source={{ uri: `https://www.maryswholelife.com/wp-content/uploads/2023/04/Lemon-Blueberry-Mocktail-09-scaled.jpg` }} style={styles.drinkThumbnailImage} />
      </TouchableOpacity>
    </View>
  );
}

export default DrinkThumbnail