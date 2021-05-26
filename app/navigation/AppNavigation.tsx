import React from 'react';
import { Dimensions, } from 'react-native';

const { width } = Dimensions.get('window');

import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';

import Home from '../screens/Home';
import Album from '../screens/album';
enableScreens();

const MainStack = createStackNavigator();

const Routes = () => (
    <MainStack.Navigator>
        <MainStack.Screen name="home" options={{
            title: 'Album App',
            headerStyle: { backgroundColor: '#ccc' }
        }} component={Home} />
        <MainStack.Screen name="photos" options={{
            title: '',
            headerBackTitleVisible: false,
            headerStyle: { backgroundColor: '#ccc' }
        }} component={Album} />
    </MainStack.Navigator>
);

export default Routes;
