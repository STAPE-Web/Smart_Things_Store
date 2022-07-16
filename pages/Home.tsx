import { StyleSheet, Text, View, Image, SafeAreaView, TextInput } from 'react-native'
import React, { FC, useState } from 'react'
import { MenuAlt1Icon, SearchIcon } from 'react-native-heroicons/outline'
import HeaderButton from '../components/HeaderButton'
import Nav from '../components/Nav'
import { useRoute } from '@react-navigation/native';
import { items } from '../Objects'
import Modal from '../components/Modal'
import { useDispatch } from 'react-redux'
import { add } from '../slices/userSlice'

const Home: FC = ({ navigation }: any) => {
    const [search, setSearch] = useState('')
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()
    const route = useRoute()

    const cleanInput = (): void => {
        setSearch('')
    }
    const navigateItem = (item: any) => {
        dispatch(add({
            id: item.id,
            img: item.img,
            name: item.name,
            price: item.price,
            description: item.description,
            rate: item.rate,
            reviews: item.reviews,
            colors: item.colors,
        }))
        navigation.navigate('Card')
    }

    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.header}>
                <HeaderButton Icon={MenuAlt1Icon} name="Menu" onClick={e => setModal(!modal)} />
                <Image source={require('../assets/app/UserAvatar.svg')} style={styles.avatar} />
            </View>
            <View style={styles.formContainer}>
                <View style={styles.search}>
                    <TextInput style={styles.input} placeholder='Search' value={search} onChange={e => setSearch((e.target as any).value)} />
                    <SearchIcon style={styles.icon} />
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.textH1}>Popular Device</Text>
                    <View onClick={cleanInput}>
                        <Text style={styles.textH3}>Show all</Text>
                    </View>
                </View>
                <View style={styles.cardList}>
                    {items.map(item => (
                        <View key={item.id} style={styles.item} onClick={() => navigateItem(item)}>
                            <Image source={item.img} style={styles.itemImg} />
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemPrice}>${item.price}</Text>
                        </View>
                    ))}
                </View>
            </View>
            <Nav route={route} navigation={navigation} />
            {modal ? <Modal modal={modal} setModal={setModal} /> : null}
        </SafeAreaView >
    )
}

export default Home

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#fff'
    },
    avatar: {
        width: 60,
        height: 60
    },
    header: {
        paddingHorizontal: 25,
        paddingVertical: 35,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    formContainer: {
        backgroundColor: '#8DB5E5',
        borderTopLeftRadius: 55,
        borderTopRightRadius: 55,
        height: '100%',
        paddingHorizontal: 25,
        paddingVertical: 35
    },
    search: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 50,
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    input: {
        width: '100%',
        outlineStyle: 'none',
        fontSize: 18,
        fontFamily: 'Inter_700Bold'
    },
    icon: {
        width: 34,
        height: 34
    },
    textH1: {
        fontSize: 22,
        fontFamily: 'Inter_700Bold',
    },
    textH3: {
        color: '#B5B7B9',
        fontFamily: 'Inter_700Bold',
        fontSize: 16
    },
    container: {
        width: '100%',
        backgroundColor: '#fff',
        position: 'absolute',
        top: '100%',
        borderTopRightRadius: 55,
        borderTopLeftRadius: 55,
        paddingBottom: 100
    },
    box: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 50
    },
    cardList: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingHorizontal: 25,
        gap: 10
    },
    itemImg: {
        width: 170,
        height: 170,
        backgroundColor: '#F4F6F8',
        borderRadius: 20
    },
    item: {
        marginBottom: 20,
        display: 'flex',
        gap: 10
    },
    itemName: {
        fontSize: 16,
        fontFamily: 'Inter_700Bold'
    },
    itemPrice: {
        fontSize: 16,
        fontFamily: 'Inter_400Regular'
    }
})