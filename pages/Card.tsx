import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React, { FC } from 'react'
import HeaderButton from '../components/HeaderButton'
import { ChevronLeftIcon, ShoppingCartIcon } from 'react-native-heroicons/outline'
import { addBasket, selectBasket, selectUser } from '../slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { StarIcon } from 'react-native-heroicons/solid'

const Card: FC = ({ navigation }: any) => {
    const item = useSelector(selectUser)
    const basket = useSelector(selectBasket)
    const dispatch = useDispatch()
    const recomend = [
        { id: 1, url: require('../assets/app/recomend/1.svg') },
        { id: 2, url: require('../assets/app/recomend/2.svg') },
        { id: 3, url: require('../assets/app/recomend/3.svg') },
        { id: 4, url: require('../assets/app/recomend/1.svg') },
        { id: 5, url: require('../assets/app/recomend/2.svg') },
        { id: 6, url: require('../assets/app/recomend/3.svg') },
    ]
    const addBasketItems = {
        id: Date.now(),
        name: item.name,
        price: item.price,
        image: item.img
    }

    const addToBasket = () => {
        dispatch(addBasket(
            [...basket, addBasketItems]
        ))
    }

    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.header}>
                <HeaderButton Icon={ChevronLeftIcon} name="back" onClick={() => { navigation.goBack() }} />
                <View>
                    {basket == '' ? null : <View style={styles.items} />}
                    <ShoppingCartIcon style={styles.icon} onClick={() => { navigation.navigate('Basket') }} />
                </View>
            </View>
            <View style={styles.formContainer} />
            <View style={styles.container}>
                <Image source={item?.img} style={styles.image} />
                <View style={styles.flexBetween}>
                    <View style={styles.gap}>
                        <Text style={styles.textH1}>{item?.name}</Text>
                        <View style={[styles.flex, styles.gap]}>
                            <StarIcon style={styles.starIcon} />
                            <Text style={styles.rateText}>{item?.rate}</Text>
                            <Text style={{ color: '#A2A2A2', fontSize: 15, fontFamily: 'Inter_700Bold', }}>({item?.reviews} Reviews)</Text>
                        </View>
                    </View>
                    <Text style={styles.priceText}>${item?.price}</Text>
                </View>
                <Text style={styles.description}>{item?.description}</Text>
                <View style={[styles.flex, styles.gap]}>
                    <Text style={styles.colorText}>Colors:</Text>
                    {item?.colors.map((col: any) => (
                        <View style={[styles.colors, { backgroundColor: col }]} key={col.toString()}></View>
                    ))}
                </View>
                <View style={styles.recBox}>
                    {recomend.map(rec => (
                        <Image style={styles.img} key={rec.id} source={rec.url} />
                    ))}
                </View>
                <View style={styles.button} onClick={addToBasket}>
                    <Text style={styles.textButton}>Purchase Now</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Card

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#fff'
    },
    header: {
        paddingHorizontal: 25,
        paddingVertical: 35,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    icon: {
        width: 34,
        height: 34
    },
    formContainer: {
        backgroundColor: '#8DB5E5',
        borderTopLeftRadius: 55,
        borderTopRightRadius: 55,
        height: '100%',
        paddingHorizontal: 25,
        paddingVertical: 35
    },
    container: {
        width: '100%',
        backgroundColor: '#fff',
        position: 'absolute',
        top: '85%',
        borderTopRightRadius: 55,
        borderTopLeftRadius: 55,
        paddingHorizontal: 25,
        paddingTop: 25
    },
    image: {
        width: '100%',
        height: 240
    },
    colors: {
        width: 20,
        height: 20,
        borderRadius: 100
    },
    textH1: {
        fontSize: 22,
        fontFamily: 'Inter_700Bold',
    },
    flexBetween: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
    },
    gap: {
        display: 'flex',
        gap: 5
    },
    starIcon: {
        color: '#E6A802',
        width: 25,
        height: 25
    },
    rateText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 15
    },
    priceText: {
        fontSize: 22,
        fontFamily: 'Inter_400Regular',
    },
    description: {
        color: '#A2A2A2',
        fontFamily: 'Inter_500Medium',
        fontSize: 14,
        marginVertical: 20
    },
    colorText: {
        color: '#8B8B8B',
        fontFamily: 'Inter_700Bold',
        fontSize: 16
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 20,
        backgroundColor: '#F4F6F8'
    },
    recBox: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 30,
        overflowX: 'scroll',
        marginTop: 25
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        width: '100%',
        height: 65,
        backgroundColor: '#8DB5E5',
        marginTop: 25
    },
    textButton: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Inter_700Bold',
    },
    items: {
        width: 10,
        height: 10,
        backgroundColor: '#FF6263',
        borderRadius: parseInt('100%'),
        position: 'absolute',
        marginLeft: 25
    }
})
