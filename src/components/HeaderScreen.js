import React from 'react';
import {
    View, SafeAreaView, Text, TextInput, TouchableOpacity
} from 'react-native';
import colors from '../helper/colors';
import { Arrowleft, MenuIcon } from '../helper/CommonImagesPath';
import SvgImage from '../helper/SvgImage';
import { screenHeight, screenWidth } from '../helper/Util';


const HeaderScreen = ({
    onPressLeft,
    onPresRight,
    isRightIconShow,
    isLeftIconHide,
    LeftIcon,
    LeftIconStyle,
    Title,
    placeholder,
    TextStyle
}) => {


    return (
        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingTop: 10, }} >
            {
                isLeftIconHide ?
                    <View style={{ height: 40, width: 40 }} >
                    </View>
                    :
                    <TouchableOpacity
                        onPress={onPressLeft}
                        style={{
                            // backgroundColor: 'red',
                            height: 40,
                            width: 40,
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center'

                        }} >
                        <SvgImage
                            source={LeftIcon ? LeftIcon : Arrowleft}
                            style={[{ height: 30, width: 30 }, LeftIconStyle]}
                        />
                    </TouchableOpacity>
            }

            <Text
                style={[{ fontSize: 20, color: colors.PortsMouthGray, fontFamily: 'CenturyGothicPro-Bold' }, TextStyle]}
            >
                {Title}
            </Text>

            <TouchableOpacity
                onPress={isRightIconShow ? onPresRight : () => {

                }}
                style={{

                    height: 50,
                    width: 50,
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center'

                }} >
                {
                    isRightIconShow ?
                        <SvgImage
                            source={MenuIcon}
                            style={{ height: 25, width: 25 }}
                        />
                        :
                        null
                }

            </TouchableOpacity>
        </View>
    )


}


export default HeaderScreen
