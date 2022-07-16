import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import React from 'react'
import { CogIcon, HomeIcon, ShoppingCartIcon, UserIcon } from 'react-native-heroicons/outline'
import {
    HomeIcon as HomeIconSolid,
    ShoppingCartIcon as ShoppingCartIconSolid,
} from 'react-native-heroicons/solid'

const Nav = ({ route, navigation }: any) => {
    return (
        <View style={styles.container}>
            {route.name == 'Home'
                ? <View>
                    <HomeIconSolid style={[styles.icon, styles.active as StyleProp<ViewStyle>]} />
                    <View style={styles.marker} />
                </View>
                : <HomeIcon style={styles.icon} onClick={() => navigation.navigate('Home')} />
            }
            {route.name == 'Basket'
                ? <View>
                    <ShoppingCartIconSolid style={[styles.icon, styles.active as StyleProp<ViewStyle>]} />
                    <View style={styles.marker} />
                </View>
                : <ShoppingCartIcon style={styles.icon} onClick={() => navigation.navigate('Basket')} />
            }
            <CogIcon style={styles.icon} />
            <UserIcon style={styles.icon} />
        </View>
    )
}

export default Nav

const styles = StyleSheet.create({
    icon: {
        height: 34,
        width: 34,
        color: '#9FA1A5',
        marginBottom: 20
    },
    active: {
        color: '#8DB5E5',
        marginTop: 5
    },
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 30,
        paddingHorizontal: 40,
        position: 'fixed',
        backgroundColor: '#fff',
        bottom: 0,
        zIndex: 100
    },
    marker: {
        width: 32,
        height: 5,
        backgroundColor: '#8DB5E5',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    }
})