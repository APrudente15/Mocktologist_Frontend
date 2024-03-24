import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, FlatList, Image, TouchableHighlight } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system';
import { useAuth } from '../hooks/useAuth';
import styles from '../style';

export default function Complete({ navigation }) {

    const { userId } = useAuth()

    const [rating, setRating] = useState(5)
    const [image, setImage] = useState('https://t4.ftcdn.net/jpg/05/65/22/41/360_F_565224180_QNRiRQkf9Fw0dKRoZGwUknmmfk51SuSS.jpg')
    const [uploadImg, setUploadImg] = useState('https://media.istockphoto.com/id/1303977605/photo/five-cocktails-in-hands-joined-in-celebratory-toast.jpg?s=612x612&w=0&k=20&c=QtnWuVeQCwKOfXIISxfkuDhQTe15qnnKOFKgpcH1Vko=')
    const [done, setDone] = useState(false)

    const pickImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.cancelled) {
            try {
                const uploadedImage = await uploadImageToGitHub(result.assets[0].uri);
                console.log('Uploaded image details:', uploadedImage);
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    const uploadImageToGitHub = async (imageUri) => {
        try {
            const base64Image = await FileSystem.readAsStringAsync(imageUri, { encoding: FileSystem.EncodingType.Base64 });

            const owner = 'zmolla99';
            const repo = 'profile_pics';
            const path = `${userId}/drinks/${Date.now()}.jpg`;
            const message = 'Upload image';
            const accessToken = '';
            const content = {
                message,
                content: base64Image,
            };
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
                method: 'PUT',
                headers: {
                    Authorization: `token ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(content),
            });

            if (!response.ok) {
                throw new Error('Failed to upload image to GitHub');
            }

            const responseData = await response.json();
            console.log('Image uploaded successfully:', responseData);
            setImage(responseData.content.download_url);
            setUploadImg(responseData.content.download_url)
            return image;
        } catch (error) {
            console.error('Error uploading image to GitHub:', error);
            throw error;
        }
    };

    const handleDone = () => {
        setDone(true)
        setTimeout(() => {
            setDone(false)
            navigation.navigate("Dashboard")
        }, 1500);

    }

    if (done) {
        return (
            <View style={styles.completebg}>
                <Text style={styles.completemsg}>Cheers!</Text>
                <Image
                    source={{ uri: 'https://media2.giphy.com/media/jj0cTIyyiCWrBKM73f/giphy.gif?cid=6c09b952oczhf1e4kiasjrpk3utrrdqi9c62gp6754qsddfp&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s' }}
                    style={styles.done}
                />
            </View>
        )
    }

    return (
        <View style={styles.completebg}>
            <Text style={styles.completemsg}>Thirst Quenched!</Text>
            <Image
                source={{ uri: 'https://cliply.co/wp-content/uploads/2021/09/CLIPLY_372109170_FREE_FIREWORKS_400.gif' }}
                style={styles.completeimg}
            />
            <TouchableOpacity onPress={pickImage}>
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
            <TouchableHighlight style={styles.buttonc} underlayColor="#ED91C8" onPress={handleDone}>
                <Text style={styles.buttonTextc}> Complete </Text>
            </TouchableHighlight>
        </View>
    );
}