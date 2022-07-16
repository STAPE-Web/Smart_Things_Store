import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React, { FC } from 'react'
import { useRoute } from '@react-navigation/native'
import Nav from '../components/Nav'
import { CashIcon } from 'react-native-heroicons/outline'
import { useSelector } from 'react-redux'
import { selectBasket } from '../slices/userSlice'

const Basket: FC = ({ navigation }: any) => {
    const route = useRoute()
    const basket = useSelector(selectBasket)

    return (
        <SafeAreaView>
            {basket == ''
                ? <View style={styles.emptyBox}>
                    <Text style={styles.empty}>Cart is empty</Text>
                </View>
                : <View style={styles.container}>
                    <View style={{ paddingBottom: 100, display: 'flex', gap: 20 }}>
                        {basket.map((bas: any) => (
                            <View key={bas.id} style={styles.box}>
                                <Image source={bas?.image} style={styles.itemImage} />
                                <View>
                                    <Text>{bas.name}</Text>
                                    <Text>{bas.price}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>}
            <View style={styles.money}><CashIcon style={styles.icon} /></View>
            <Nav route={route} navigation={navigation} />
        </SafeAreaView >
    )
}

export default Basket

const styles = StyleSheet.create({
    money: {
        width: 60,
        height: 60,
        backgroundColor: '#8DB5E5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: parseInt('100%'),
        position: 'fixed',
        right: 15,
        top: 15
    },
    icon: {
        width: 30,
        height: 30,
        color: '#fff'
    },
    empty: {
        position: 'absolute',
        fontFamily: 'Inter_700Bold',
        fontSize: 24,
        marginVertical: 'auto',
    },
    emptyBox: {
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100
    },
    container: {
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        padding: 25,
        backgroundColor: '#fff',
    },
    box: {
        backgroundColor: '#F4F6F8',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20
    },
    itemImage: {
        width: 100,
        height: 100,
    },
})