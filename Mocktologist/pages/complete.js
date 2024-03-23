import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, FlatList, Image, TouchableHighlight } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import styles from '../style';

export default function Complete({ navigation }) {

    const [rating, setRating] = useState(5)
    const [image, setImage] = useState('https://t4.ftcdn.net/jpg/05/65/22/41/360_F_565224180_QNRiRQkf9Fw0dKRoZGwUknmmfk51SuSS.jpg')

    return (
        <View style={styles.completebg}>
            <Text style={styles.completemsg}>Thirst Quenched!</Text>
            <Image
                source={{ uri: 'https://cliply.co/wp-content/uploads/2021/09/CLIPLY_372109170_FREE_FIREWORKS_400.gif' }}
                style={styles.completeimg}
            />
            <TouchableOpacity>
                <Image
                    source={{ uri: image }}
                    style={styles.completeup}
                />
            </TouchableOpacity>
            <View style={styles.ddboxc}>
                <Text style={styles.dropdownMess}> Drink Rating </Text>
                <Dropdown
                    style={styles.dropDownc}
                    placeholder={rating}
                    data={[
                        { label: '1', value: 1 },
                        { label: '2', value: 2 },
                        { label: '3', value: 3 },
                        { label: '4', value: 4 },
                        { label: '5', value: 5 },
                        { label: '6', value: 6 },
                        { label: '7', value: 7 },
                        { label: '8', value: 8 },
                        { label: '9', value: 9 },
                        { label: '10', value: 10 },
                    ]}
                    labelField="label"
                    valueField="value"
                    value={rating}
                    onChange={item => setRating(item.value)}
                    selectedTextStyle={[{ color: '#353535' }, { marginLeft: '45%' }, { fontWeight: 'bold' }]}
                    placeholderStyle={[{ color: 'white' }, { marginLeft: '45%' }]}
                />
            </View>
            <TouchableHighlight style={styles.buttonc} underlayColor="#ED91C8" >
                <Text style={styles.buttonText}> Complete </Text>
            </TouchableHighlight>
        </View>
    );
}