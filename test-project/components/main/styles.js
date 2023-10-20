import { StyleSheet } from "react-native"
const style = StyleSheet.create({
    mainBlock: {
        width: '100%',

    },
    food_block: {
        direction: 'ltr',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 15,

    },
    food_title: {
        paddingTop: 5,
        fontSize: 11,
        fontWeight: 'normal',
        textAlign: 'center'
    },
    food_price: {
        color: '#FF5C00',
        fontSize: 9,
        paddingBottom: 5
    }
})

export default style


export const singleStyle = StyleSheet.create({
    block: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modlaView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        paddingTop: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalView_head: {
        justifyContent: 'space-between',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    modalClose: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 13,
    },
    modalCloseBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        width: 25,
        height: 25
    }

})