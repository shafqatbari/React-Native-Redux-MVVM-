import React from 'react';
import {
    View, SafeAreaView, Text, TextInput, TouchableOpacity
} from 'react-native';
import colors from '../helper/colors';
import FontsName from '../helper/FontsName';
import { screenHeight, screenWidth } from '../helper/Util';


const TextTouchable = ({
    onPress,
    Title,
    placeholder,
    titleStyle,
    StyleOpacity,
}) => {


    return (
        <View style={{}} >
            <TouchableOpacity
                onPress={onPress}
                style={[{
                    // backgroundColor: 'red',
                    // height: 60,
                    // width: screenWidth * 0.45,
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 5,
                    paddingHorizontal: 20,

                }
                    , StyleOpacity
                ]} >
                <Text
                    style={[{ fontFamily: FontsName.RegularFont, fontSize: 18, color: colors.BaseGreen, }, titleStyle]}
                >
                    {Title}
                </Text>

            </TouchableOpacity>
        </View>
    )


}


export default TextTouchable
