
import React, { useEffect, useRef, useState } from 'react';
import {
    View, SafeAreaView, Text, ImageBackground, StyleSheet, ScrollView, AppState
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const SignupScreen = ({
    navigation,

}) => {
    const dispatch = useDispatch();
    const [userEmail, setUserEmail] = useState('')
    var loginData = useSelector(state => state.app.login)



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }} >
            <View style={{ flex: 1, backgroundColor: 'white' }} >

            </View >
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {

        flex: 1,
        // height: '100%',
        // width: '100%'

    },
});

export default SignupScreen

