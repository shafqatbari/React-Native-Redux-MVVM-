import React, { useState } from 'react';
import {
    View, SafeAreaView, Text, TextInput, TouchableOpacity
} from 'react-native';
import colors from '../helper/colors';
import { EyeICon, HidePassword, ShowPassword } from '../helper/CommonImagesPath';
import FontsName from '../helper/FontsName';
import SvgImage from '../helper/SvgImage';
import { screenWidth } from '../helper/Util';


const TextInputView = React.forwardRef(({
    onChangeText,
    value,
    placeholder,
    isBackGray,
    textInputBackColor,
    isShowPasswordIcon,
    returnKeyType,
    onSubmitEditing,
    keyboardType,
    title,
    leftIcon,
    editable,

}, ref) => {
    const [isShowPassword, setIsShowPassword] = useState(true)
    return (
        <View>
            <Text style={{ color: colors.BlackColor, fontSize: 16, fontFamily: FontsName.SemiBold, }} >
                {title}
            </Text>
            <View style={{
                flexDirection: 'row',
                height: 50,
                borderWidth: 1,
                borderColor: colors.gray77,
                borderRadius: 5,
                alignItems: 'center',
            }} >
                {
                    leftIcon ?
                        <View style={{ marginStart: 8 }} >
                            <SvgImage
                                source={leftIcon}
                                style={{ height: 20, width: 20, }}
                            />
                        </View>
                        :
                        null
                }
                <View style={{
                    backgroundColor: textInputBackColor ? textInputBackColor : isBackGray ? colors.gray30 : 'white',
                    marginHorizontal: 5, flex: 1,
                    justifyContent: isShowPasswordIcon ? 'space-between' : 'center',
                    flexDirection: isShowPasswordIcon ? 'row' : 'column',
                    alignItems: isShowPasswordIcon ? 'center' : 'flex-start',
                    marginTop: 5
                }} >

                    <TextInput
                        ref={ref}
                        style={{
                            width: isShowPasswordIcon ? '85%' : '100%', color: colors.BlackColor,
                            fontFamily: FontsName.RegularFont,
                            fontSize: 14,
                        }}
                        placeholder={placeholder}
                        value={value}
                        onChangeText={onChangeText}
                        secureTextEntry={isShowPasswordIcon ? isShowPassword : false}
                        returnKeyType={returnKeyType ? returnKeyType : 'default'}
                        onSubmitEditing={onSubmitEditing && onSubmitEditing}
                        placeholderTextColor={colors.gray76}
                        keyboardType={keyboardType && keyboardType}
                        editable={editable && editable}

                    />
                    {
                        isShowPasswordIcon ?
                            <TouchableOpacity onPress={() => {
                                setIsShowPassword(!isShowPassword)
                            }}
                                style={{ paddingVertical: 10, paddingHorizontal: 5, }}
                            >
                                {isShowPassword ?
                                    <EyeICon color={colors.BaseGreen} style={{ color: colors.BaseGreen }} />
                                    :
                                    <EyeICon color={colors.gray90} style={{ color: colors.gray90 }} />
                                }
                            </TouchableOpacity>
                            :
                            null
                    }
                </View>
            </View>
        </View>
    )


}
)

export default TextInputView





