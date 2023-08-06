import React from 'react';
import {
    View, SafeAreaView, Text, TextInput, TouchableOpacity
} from 'react-native';
import colors from '../helper/colors';
import FontsName from '../helper/FontsName';
import SvgImage from '../helper/SvgImage';
import { screenHeight, screenWidth } from '../helper/Util';


const ButtonTouchable = ({
    onPress,
    Title,
    placeholder,
    StyleOpacity,
    secondButton,
    backGroundGreen,
    SecondIcon,
    FirstIcon,
}) => {


    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', }} >
            <TouchableOpacity
                onPress={onPress}
                style={[{
                    backgroundColor: secondButton ? colors.White : backGroundGreen ? colors.BaseGreen : colors.Blue2838,
                    height: 50,
                    width: screenWidth - 40,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: secondButton ? 1 : 0,
                    borderColor: secondButton ? colors.SlateGray77 : colors.Blue2838


                }, StyleOpacity
                ]} >
                <View style={{ flexDirection: 'row' }} >
                    {
                        FirstIcon ?
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginEnd: 3 }} >
                                <SvgImage
                                    source={FirstIcon}
                                    style={{ width: 20, height: 12, color: colors.White }}
                                />
                            </View>
                            :
                            null
                    }
                    <Text
                        style={{ fontFamily: FontsName.SemiBold, fontSize: 16, color: secondButton ? colors.SlateGray77 : colors.White, marginTop: 3 }}
                    >
                        {Title}
                    </Text>
                    {
                        SecondIcon ?
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginStart: 3 }} >
                                <SvgImage
                                    source={SecondIcon}
                                    style={{ width: 20, height: 12, color: colors.White }}
                                />
                            </View>
                            :
                            null
                    }
                </View>

            </TouchableOpacity>
        </View>
    )


}


export default ButtonTouchable
