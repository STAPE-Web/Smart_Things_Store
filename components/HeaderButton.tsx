import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
    Icon: any,
    name: string,
    onClick: (e: MouseEvent) => void
}

const HeaderButton = ({ Icon, name, onClick }: Props) => {
    return (
        <View style={styles.container} onClick={onClick}>
            <View style={styles.iconBox}>
                <Icon style={styles.icon} />
            </View>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

export default HeaderButton

const styles = StyleSheet.create({
    container: {
        width: 130,
        height: 56,
        backgroundColor: '#E9EBED',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 30,
        padding: 5,
        paddingRight: 20
    },
    iconBox: {
        width: 46,
        height: 46,
        backgroundColor: '#FFF',
        borderRadius: parseInt('100%'),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 25,
        height: 25
    },
    text: {
        fontFamily: 'Inter_400Regular',
        fontSize: 18,
        color: '#848688'
    }
})