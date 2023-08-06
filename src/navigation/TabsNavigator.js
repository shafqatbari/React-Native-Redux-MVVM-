import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from '../screens/ChatScreen/screen/ChatScreen'
import HomeScreen from '../screens/Home/screen/Home'
import ProfileScreen from '../screens/ProfileScreen/screen/ProfileScreen'


import SvgImage from '../helper/SvgImage'
import colors from '../helper/colors';
import ScreenNames from '../helper/ScreenNames';
import { View, TouchableOpacity, Text } from 'react-native';



const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {

    const MyTabBar = ({ state, descriptors, navigation }) => {
        let backColor = '#BDEFDE'
        if (state.index === 1) {
            backColor = '#D7F79A'
        }
        else if (state.index === 2) {
            backColor = '#DDCBE5'
        }
        else if (state.index === 3) {
            backColor = '#DDCBE5'
        }

        return (
            <View style={{ backgroundColor: backColor }} >
                <View style={{ flexDirection: 'row', height: 70, backgroundColor: 'white', }}>
                    {state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                    ? options.title
                                    : route.name;

                        const isFocused = state.index === index;

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };

                        const onLongPress = () => {
                            navigation.emit({
                                type: 'tabLongPress',
                                target: route.key,
                            });
                        };

                        return (
                            <TouchableOpacity
                                accessibilityRole="button"
                                accessibilityState={isFocused ? { selected: true } : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                onLongPress={onLongPress}
                                activeOpacity={1}
                                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: isFocused ? colors.BaseGreen : colors.gray20 }}
                            >
                                {label === ScreenNames.HomeScreen ?
                                    <View style={{ backgroundColor: isFocused ? colors.BaseGreen : colors.gray20, height: 100, width: 100, position: 'absolute', top: -30, borderRadius: 70 }} >

                                    </View>
                                    :
                                    null
                                }
                                {
                                    label === ScreenNames.ChatScreen ?
                                        <Text style={{ color: isFocused ? colors.White : '#222' }}>
                                            CHAT
                                        </Text>
                                        :
                                        label === ScreenNames.HomeScreen ?
                                            <Text style={{ color: isFocused ? colors.White : '#222' }}>
                                                HOME
                                            </Text>
                                            :
                                            label === ScreenNames.ProfileScreen ?
                                                <Text style={{ color: isFocused ? colors.White : '#222' }}>
                                                    PROFILE
                                                </Text>
                                                :
                                                <Text style={{ color: isFocused ? colors.White : '#222' }}>
                                                    {label}
                                                </Text>

                                }




                            </TouchableOpacity>
                        );
                    })}

                </View>

            </View >
        );
    }

    return (
        <Tab.Navigator

            tabBar={(props) => <MyTabBar {...props} />}
            screenOptions={{
                headerShown: false,
            }}

            initialRouteName={ScreenNames.HomeScreen}>
            <Tab.Screen name={ScreenNames.ChatScreen} component={ChatScreen} />
            <Tab.Screen name={ScreenNames.HomeScreen} component={HomeScreen} />
            <Tab.Screen name={ScreenNames.ProfileScreen} component={ProfileScreen} />
        </Tab.Navigator>
    );
};
