import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { BackHandler } from 'react-native'
import { style } from './styles'
import LeftMain from '../../components/leftMain'
import Main from '../../components/main'

export default function Home() {
    // useEffect(() => {
    //     const handleBackPress = () => {
    //         // Блокировка выхода из приложения
    //         return true;
    //     };

    //     BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    //     return () => {
    //         BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    //     };
    // }, [])
    const [selectCat, setCat] = useState(1)
    return (
        <View style={style.container}>
            <LeftMain handleSetCat={setCat} />
            <View style={style.inner}>
                <Main catId={selectCat} />
            </View>

        </View>
    )
}
