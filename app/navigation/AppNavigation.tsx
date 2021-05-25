import React from 'react';
import { Dimensions, } from 'react-native';

const { width } = Dimensions.get('window');

import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';

import Home from '../screens/Home';
enableScreens();

const MainStack = createStackNavigator();

const Routes = () => (
    <MainStack.Navigator
        screenOptions={{}}
        headerMode="none">
        <MainStack.Screen name="home" component={Home} />
    </MainStack.Navigator>
);

export default Routes;
