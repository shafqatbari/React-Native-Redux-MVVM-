import React, { useEffect, useState, useRef } from 'react';
import { GetCurrentUserDataAPI, writeUserData, getUserData } from '../../../lib/ApiCalls'
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import firestore from '@react-native-firebase/firestore';
import { countriesArray } from '../../../helper/Util'

const ProfileEditScreenServiceComponent = ({ children, navigation, }) => {

    const TextInputref = useRef()
    const AgetInput = useRef()
    const genderref = useRef()
    const Naemref = useRef()
    const [selectedValue, setSelectedValue] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [userData, setUserData] = useState("");
    const [ImageData64, setImageData64] = useState('');
    const [showImage, setshowImage] = useState('');
    const bottomRef = useRef();
    const [isLoading, setIsLoading] = useState(false)
    // useEffect(() => {

    //     getdatafrom()
    // }, [])
    const [coutriesArray, setCoutriesArray] = useState([])
    const [AllcoutriesArray, setAllCoutriesArray] = useState(countriesArray)

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            setIsLoading(true)
            await getdatafrom()
        });

        return unsubscribe;
    }, [navigation]);
    const getdatafrom = async () => {

        const value = await AsyncStorage.getItem('@storage_user_id')
        var user = await firestore().collection('Users').doc(value).get();
        let tempUser = user._data
        setUserData(tempUser)
        tempUser.name && setName(tempUser.name)
        tempUser.email && setEmail(tempUser.email)
        tempUser.age && setAge(tempUser.age)
        tempUser.gender && setSelectedValue(tempUser.gender)
        tempUser.country && setCountry(tempUser.country)
        tempUser.last_name && setLastName(tempUser.last_name)
        tempUser.last_name && setLastName(tempUser.last_name)
        tempUser.profileUrl && setImageData64(tempUser.profileUrl)
        tempUser.profileUrl && setshowImage(tempUser.profileUrl)
        setIsLoading(false)

    }
    const onBackPress = () => {
        writeUserData({
            name: name,
            email: email,
            age: age,
            gender: selectedValue,
            country: country,
            last_name: lastName,
            profileUrl: ImageData64,
        }).then(() => {
            navigation.goBack()
        })
    }


    const onChangeTextCountry = (country) => {
        setCountry(country)
        const newData = AllcoutriesArray.filter(item => {
            const itemData = `${item.Name.toUpperCase()}`;
            const textData = country.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        country.length > 1 ? setCoutriesArray(newData) : setCoutriesArray([])
    }
    const onSelectCountry = (item) => {
        setCountry(item.Name)
        setCoutriesArray([])
    }
    const onPressDropdown = () => {
        if (coutriesArray.length > 0) {
            setCoutriesArray([])
        }
        else {
            setCoutriesArray(AllcoutriesArray)
        }
    }

    return children({
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
        coutriesArray,
        onSelectCountry,
        onPressDropdown,


        onBackPress,

    });

}

export default ProfileEditScreenServiceComponent;
