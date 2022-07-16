import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import Card from './pages/Card';
import Basket from './pages/Basket';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Card'
                component={Card}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Basket'
                component={Basket}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>
}