import React, { useEffect, useState } from 'react'
import { View, Text, Image, StatusBar, Pressable } from 'react-native'
import style from './styles'
import { FlatGrid } from 'react-native-super-grid';
import SinglePage from './singlePage';


export const data = [
    {
        id: 1,
        title: 'Steak sapi bakar',
        price: 25.12,
        categoryId: 1,
        img: 'https://img1.russianfood.com/dycontent/images_upl/559/big_558596.jpg'
    },
    {
        id: 2,
        title: 'Lagman',
        categoryId: 2,
        price: 10.12,
        img: 'https://img1.russianfood.com/dycontent/images_upl/559/big_558596.jpg'
    },
    {
        id: 4,
        categoryId: 1,
        title: 'Steak',
        price: 2222.12,
        img: 'https://img1.russianfood.com/dycontent/images_upl/559/big_558596.jpg'
    },
    {
        id: 3,
        title: 'Манты',
        categoryId: 4,
        price: 4443.12,
        img: 'https://img1.russianfood.com/dycontent/images_upl/559/big_558596.jpg'
    },
    {
        id: 5,
        title: 'Beshmarmak Tuda Suda Mnogo Slov i TD',
        categoryId: 3,
        price: 241.12,
        img: 'https://img1.russianfood.com/dycontent/images_upl/559/big_558596.jpg'
    },
    {
        id: 6,
        title: 'Borsh',
        categoryId: 3,
        price: 4231.12,
        img: 'https://img1.russianfood.com/dycontent/images_upl/559/big_558596.jpg'
    },
    {
        id: 7,
        title: 'Hurma',
        categoryId: 6,
        price: 4231.12,
        img: 'https://img1.russianfood.com/dycontent/images_upl/559/big_558596.jpg'
    }
]


export default function index({ catId }) {
    const [openSingle, setOpenSingle] = useState({ isOpen: false, data: {} })
    useEffect(() => {
        StatusBar.setHidden(true);
        setMyData(data.filter(item => {
            if (catId && catId == item.categoryId) {
                return item
            }
        }))
    }, [catId]);
    const [myData, setMyData] = useState(data.filter(item => {
        if (catId && catId == item.categoryId) {
            return item
        }
    }))
    return (
        <View
            style={style.mainBlock}
        >
            <FlatGrid
                itemDimension={90}
                data={myData}
                style={{ width: '85%' }}
                renderItem={({ item }) => (
                    <Pressable
                        key={item.id}
                        onPress={() => {
                            setOpenSingle({ isOpen: true, data: item })
                        }}
                    >
                        <View
                            style={style.food_block}
                        >
                            <Image
                                style={{
                                    width: 90,
                                    height: 80,
                                    borderRadius: 15,
                                }}
                                source={{ uri: item.img }}
                                onError={(error) => console.log('Image load error:', error)}
                            />
                            <Text
                                numberOfLines={1}
                                ellipsizeMode="tail"
                                style={style.food_title}
                            >{item.title}</Text>
                            <Text
                                style={style.food_price}
                            >{item.price}c</Text>
                        </View>
                    </Pressable>

                )
                }
            />
            <SinglePage isOpen={openSingle.isOpen} setOpen={setOpenSingle} data={openSingle.data} />
        </View>
    )
}
