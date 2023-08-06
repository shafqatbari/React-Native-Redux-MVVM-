import React, { useState } from 'react';
import {
    View, SafeAreaView, Text, ActivityIndicator, Platform, StatusBar,
    RefreshControl, TouchableOpacity, ScrollView, Image, FlatList,
    BackHandler,
} from 'react-native';
import colors from '../../../helper/colors';
const HomecreenComponent = ({
    navigation,

}) => {


    const [active, setActive] = useState(true);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.White }} >
            <View style={{ flex: 1, backgroundColor: colors.BaseGreen }} >

            </View>

        </SafeAreaView >
    );
};


export default HomecreenComponent;
