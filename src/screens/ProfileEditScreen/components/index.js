import React, { useState } from 'react';
import {
    View, SafeAreaView, Text, ActivityIndicator, Platform, StatusBar,
    RefreshControl, TouchableOpacity, ScrollView, Image, FlatList, TextInput, Dimensions
} from 'react-native';
import Backicon from '../../../assets/svg/Backicon.svg'
import SvgImage from '../../../helper/SvgImage';
import ImagePlacholder from '../../../assets/svg/ImagePlacholder.svg';
import Editicon from '../../../assets/svg/Editicon.svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import DropDownIcon from '../../../assets/svg/DropDownIcon.svg';
import { Picker } from '@react-native-picker/picker';
import ImagePickerCrop from 'react-native-image-crop-picker';
import RNFS from 'react-native-fs';
import ImageResizer from 'react-native-image-resizer';
import SimpleBottomSheet from '../../../helper/SimpleBottomSheet'
const screenWidth = Math.round(Dimensions.get('window').width);
import CustomActivityIndicator from '../../../components/CustomActivityIndicator'
const ProfileEditScreenComponent = ({
    navigation,
    TextInputref,
    AgetInput,
    genderref,
    selectedValue,
    setSelectedValue,
    Naemref,
    name,
    setName,
    email,
    setEmail,
    age,
    setAge,
    country,
    onChangeTextCountry,
    onSelectCountry,
    coutriesArray,
    gender,
    setGender,
    lastName,
    setLastName,
    ImageData64,
    setImageData64,
    bottomRef,
    showImage,
    setshowImage,
    isLoading,
    onPressDropdown,


    onBackPress,

}) => {
    const takeGalleryPicture = async () => {

        ImagePickerCrop.openPicker({
            width: screenWidth,
            height: screenWidth,
            cropping: true,
            includeBase64: false,
            disableCropperColorSetters: true,
            compressImageQuality: 0.1,
            showCropGuidelines: true,
            showCropFrame: true,
            hideBottomControls: true,
        })
            .then(image => {
                let compressFormat = 'PNG'
                let quality = 40; // out of 100
                ImageResizer.createResizedImage(image.path, 1020, 1020, compressFormat, quality).then((resizedImageUri) => {
                    // resizeImageUri is the URI of the new image that can now be displayed, uploaded...

                    setshowImage(resizedImageUri.uri)
                    convert64(resizedImageUri.uri)

                }).catch((err) => {
                    // Oops, something went wrong. Check that the filename is correct and
                    // inspect err to get more details.
                });
            })


    };
    const takeCameraPicture = async () => {


        ImagePickerCrop.openCamera({
            width: screenWidth,
            height: screenWidth,
            cropping: true,
            includeBase64: false,
            disableCropperColorSetters: true,
            compressImageQuality: 0.1,
            showCropGuidelines: true,
            showCropFrame: true,
            hideBottomControls: true,
        })
            .then(image => {

                let compressFormat = 'PNG'
                let quality = 40; // out of 100

                ImageResizer.createResizedImage(image.path, 1020, 1020, compressFormat, quality).then((resizedImageUri) => {
                    // resizeImageUri is the URI of the new image that can now be displayed, uploaded...
                    setshowImage(resizedImageUri.uri)

                    convert64(resizedImageUri.uri)
                }).catch((err) => {
                    // Oops, something went wrong. Check that the filename is correct and
                    // inspect err to get more details.
                });
            })

    };
    const convert64 = (uri) => {

        RNFS.readFile(uri, 'base64')
            .then(res => {
                setImageData64("data:image/jpeg;base64," + res)
            })
        bottomRef.current.close()
    }
    const Header = () => {
        return (
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <TouchableOpacity onPress={onBackPress}>
                    <SvgImage
                        source={Backicon}
                        style={{ width: 15, height: 31, marginTop: 20 }}
                    />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column', }}>
                    <Text style={{ fontFamily: 'billy', fontSize: 44, fontWeight: '400', color: '#FC6262', paddingTop: 3, }}>PROFILE</Text>
                    <Text style={{ fontFamily: 'billy', fontSize: 45, fontWeight: '400', color: '#FC6262', paddingTop: 3, }}>EDIT</Text>

                </View>
            </View>
        )
    }
    const ProfileDetail = () => {
        return (
            <View style={{
                flex: 1,

                marginTop: 40,
                backgroundColor: 'white', borderTopRightRadius: 60, borderTopLeftRadius: 60,
                // shadowColor: "#000",
                // shadowOffset: {
                //     width: 0,
                //     height: 8,
                // },
                // shadowOpacity: 0.44,
                // shadowRadius: 10.32,

                // elevation: 16,

            }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: -40 }}>
                    <View style={{ flex: 2.5, alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            style={{
                                width: 105, height: 105, borderRadius: 100, backgroundColor: '#9DA5D3', borderWidth: 5, borderColor: 'white',
                                justifyContent: 'center', alignItems: 'center'
                            }}
                            onPress={() => bottomRef.current.open()}>

                            {
                                showImage === '' ?
                                    <Text style={{ fontFamily: 'billy', fontWeight: '400', fontSize: Platform.OS === 'ios' ? 26 : 37, paddingTop: 3, }}>avatar</Text>
                                    : <SvgImage
                                        source={showImage === '' ? ImagePlacholder : { uri: showImage }}
                                        style={{ width: 105, height: 105, borderRadius: 100 }}
                                    />
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, paddingRight: 30, alignItems: 'flex-end' }}>

                        <SvgImage
                            source={Editicon}
                            style={{ width: 35, height: 36, marginBottom: 20 }}
                        />


                    </View>
                </View>
                {TextFields()}
            </View>
        )
    }
    const TextFields = () => {
        return (
            <View style={{ paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>

                        <Text style={{ fontFamily: 'billy', color: '#9DA5D3', fontSize: 26, paddingTop: 3, }}>Name</Text>
                    </View>
                    <View style={{
                        flex: 3,
                        paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    }}>
                        <TextInput
                            ref={Naemref}
                            placeholder='Enter Name'
                            style={{ color: '#FC6262' }}
                            value={name}
                            onChangeText={(text) => setName(text)}
                        />
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => Naemref.current.focus()}>
                            <SvgImage
                                source={Editicon}
                                style={{ width: 22, height: 16, }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {Lastname()}
                {Email()}
                {Country()}
                {Age()}
                {Gender()}
            </View>
        )
    }
    const Lastname = () => {
        return (

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>

                    <Text style={{ fontFamily: 'billy', color: '#9DA5D3', fontSize: 22, paddingTop: 3, }}>Lastname</Text>
                </View>
                <View style={{
                    flex: 3,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                }}>
                    <TextInput
                        ref={TextInputref}
                        // autoFocus={focus}
                        placeholder='Enter Lastname'
                        style={{ color: '#FC6262' }}
                        value={lastName}

                        onChangeText={(text) => setLastName(text)}


                    />
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => TextInputref.current.focus()}>
                        <SvgImage
                            source={Editicon}
                            style={{ width: 22, height: 16, }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )

    }
    const Email = () => {

        return (

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>

                    <Text style={{ fontFamily: 'billy', color: '#9DA5D3', fontSize: 26, paddingTop: 3, }}>Email</Text>
                </View>
                <View style={{
                    flex: 4,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                }}>
                    <TextInput
                        placeholder='Enter Email'
                        style={{ color: '#FC6262' }}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        editable={email && email !== '' && email !== undefined && email !== null ? false : true}
                    />
                </View>

            </View>
        )

    }

    const Country = () => {

        return (
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>

                        <Text style={{ fontFamily: 'billy', color: '#9DA5D3', fontSize: 26, paddingTop: 3, }}>Country</Text>
                    </View>
                    <View style={{
                        flex: 3,
                        paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    }}>
                        <TextInput
                            placeholder='Turkey'
                            style={{ color: '#FC6262' }}

                            value={country}
                            onChangeText={onChangeTextCountry}
                        />
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity
                            onPress={onPressDropdown}
                        >
                            <SvgImage
                                source={DropDownIcon}
                                style={{ width: 22, height: 16, }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    coutriesArray.length > 0 ?

                        <FlatList
                            nestedScrollEnabled
                            style={{ backgroundColor: '#DDCBE5', borderRadius: 20, paddingTop: 5, maxHeight: 150 }}
                            data={coutriesArray}
                            renderItem={({ item }) => {
                                return (<TouchableOpacity
                                    onPress={() => onSelectCountry(item)}
                                    style={{ paddingBottom: 3, marginBottom: 2 }}
                                >
                                    <Text style={{ fontFamily: 'billy', color: '#FC6262', marginStart: '10%', fontSize: 28, paddingTop: 3, }} >
                                        {item.Name}
                                    </Text>
                                </TouchableOpacity>
                                )
                            }}
                        />
                        :
                        null
                }
            </View>
        )

    }

    const Age = () => {
        return (

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>

                    <Text style={{ fontFamily: 'billy', color: '#9DA5D3', fontSize: 26, paddingTop: 3, }}>Age</Text>
                </View>
                <View style={{
                    flex: 3,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                }}>
                    <TextInput
                        ref={AgetInput}
                        // autoFocus={focus}
                        placeholder='Enter Age'
                        style={{ color: '#FC6262' }}

                        value={age}
                        onChangeText={(text) => setAge(text)}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => AgetInput.current.focus()}>
                        <SvgImage
                            source={Editicon}
                            style={{ width: 22, height: 16, }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )

    }
    const Gender = () => {


        return (



            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>

                    <Text style={{ fontFamily: 'billy', color: '#9DA5D3', fontSize: 26, paddingTop: 3, }}>Gender</Text>
                </View>
                <View style={{ flex: 3 }}>
                    <Picker
                        ref={genderref}
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        mode='dropdown'
                        dropdownIconColor='white'
                        color='red'
                    >
                        <Picker.Item label="Boy" value="Boy" style={{ color: 'red' }} />
                        <Picker.Item label="Girl" value="Girl" style={{ color: 'red' }} />
                    </Picker>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => genderref.current.focus()}>
                        <SvgImage
                            source={DropDownIcon}
                            style={{ width: 22, height: 16, }}
                        />
                    </TouchableOpacity>
                </View>
            </View>



        )


    }
    const renderPicture = () => {

        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => takeCameraPicture()}>
                    <View style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5, padding: 20, paddingHorizontal: 30, borderRadius: 30, backgroundColor: '#FF6160'
                    }}>
                        <Text style={{ fontFamily: 'billy', fontSize: 34, color: 'white', fontWeight: '600', paddingTop: 3, }}>Camera</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => takeGalleryPicture()}>
                    <View style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5, padding: 20, paddingHorizontal: 40, borderRadius: 30, backgroundColor: '#2D8BBE'
                    }}>
                        <Text style={{ fontFamily: 'billy', fontSize: 34, color: 'white', fontWeight: '600', paddingTop: 3, }}>Gallery</Text>

                    </View>
                </TouchableOpacity>

            </View>
        )

    }

    const MainView = () => {
        return (
            <View style={{ flex: 1, backgroundColor: '#DDCBE5' }}>
                {Header()}

                {ProfileDetail()}
                <SimpleBottomSheet
                    title={true}
                    ref={bottomRef}
                    sheetData={renderPicture}
                />
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>

                <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: "white" }}>
                    <CustomActivityIndicator
                        isLoading={isLoading}
                    />
                    {MainView()}
                </KeyboardAwareScrollView>
            </View>
        </SafeAreaView>
    );
};


export default ProfileEditScreenComponent;