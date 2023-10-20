import React, { useEffect } from 'react'
import { View, Modal, Text, Pressable } from 'react-native'
import { singleStyle } from './styles';
import { BackHandler } from 'react-native'



export default function SinglePage({ isOpen, setOpen, data }) {
 
    return (
        <View
            style={singleStyle.block}
        >
            <Modal
                animationType='slide'
                transparent={true}
                visible={isOpen}
                onRequestClose={() => {
                    setOpen(prev => ({ ...prev, isOpen: false }))
                }}
            >
                <View style={singleStyle.modlaView}>
                    <View
                        style={singleStyle.modalView_head}
                    >
                        <Text>{data.title}</Text>
                        <Pressable
                            style={singleStyle.modalCloseBtn}
                            onPress={() => {
                                setOpen(prev => ({ ...prev, isOpen: false }))
                            }}
                        >
                            <Text style={singleStyle.modalClose}>X</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>

    )
}
