import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { XIcon } from 'react-native-heroicons/outline'

const Modal = ({ modal, setModal }: any) => {
    const items = ['Popular', 'New', 'Featured', 'Important']
    return (
        <View style={styles.container}>
            <XIcon onClick={() => setModal(!modal)} style={styles.icon} />
            <View style={styles.box}>
                {items.map(item =>
                    <View key={item.toString()}>
                        <Text style={styles.item}>{item}</Text>
                    </View>)}
            </View>
        </View>
    )
}

export default Modal

const styles = StyleSheet.create({
    container: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(8px)'
    },
    icon: {
        width: 34,
        height: 34,
        marginHorizontal: 20,
        marginVertical: 20,
        alignSelf: 'flex-end',
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 'auto',
        gap: 15
    },
    item: {
        fontSize: 24,
        fontFamily: 'Inter_700Bold'
    }
})