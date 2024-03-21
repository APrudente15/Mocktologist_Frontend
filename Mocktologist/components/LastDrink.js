import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { useAuth } from '../hooks/useAuth'
import styles from '../style'

function LastDrink() {
    const { userId, token } = useAuth()
    const [hasMadeMocktail, setHasMadeMocktail] = useState(false)
    const [lastDrink, setLastDrink] = useState({})

    useEffect(() => {
        const getLastDrink = async () => {
            const options = {
                method: 'GET',
                headers: {
                    Authorization: token,
                }
            }
            const response = await fetch(`https://mocktologist-backend.onrender.com/drink/all/${userId}`, options)
            if(!response.ok){
                console.error('Cannot get drinks.')
            }
            const data = await response.json()
            if(data.length === 0){
                return
            }
            setLastDrink(data[-1])
        }
        getLastDrink()
    }, [userId])

    if(!hasMadeMocktail){
        return (
            <Text style={styles.rankText}>Your most recent mocktail will show up here!</Text>
        )
    }

    return (
        // We'll make this when the drinks are properly set up.
        <View></View>
    )
}

export default LastDrink