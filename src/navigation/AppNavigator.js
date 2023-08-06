import React, { useEffect, useContext, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenNames from '../helper/ScreenNames';
import HomeScreen from '../screens/Home/screen/Home'
import HelpAndSupportScreen from '../screens/HelpAndSupport.js'
import LoginScreen from '../screens/LoginScreen.js'
import SignupScreen from '../screens/SignupScreen.js'
import SplashScreen from '../screens/SplashScreen.js'


import { TabsNavigator } from '../navigation/TabsNavigator'





const AppNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}

            initialRouteName={ScreenNames.SplashScreen}>
            <Stack.Screen name={ScreenNames.HomeScreen} component={HomeScreen} />
            <Stack.Screen name={ScreenNames.HelpAndSupportScreen} component={HelpAndSupportScreen} />
            <Stack.Screen name={ScreenNames.LoginScreen} component={LoginScreen} />
            <Stack.Screen name={ScreenNames.SignupScreen} component={SignupScreen} />
            <Stack.Screen name={ScreenNames.SplashScreen} component={SplashScreen} />

            {/* <Stack.Screen name={ScreenNames.TabsNavigator} component={TabsNavigator} /> */}



        </Stack.Navigator>
    );
}
export default AppNavigator