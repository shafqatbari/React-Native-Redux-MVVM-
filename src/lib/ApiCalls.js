
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'

var Base_URL = 'https://app-9377.on-aptible.com/graphql'



export const storeToken = async (token) => {


    try {
        await AsyncStorage.setItem('@token', token)
    } catch (e) {
        // saving error
        console.log('>>> saving error : ', e);
    }

}
export const emptyToken = async () => {
    try {
        await AsyncStorage.setItem('@token', '')
    } catch (e) {
        // saving error
        console.log('>>> saving error : ', e);
    }

}
export const getToken = async () => {
    const value = await AsyncStorage.getItem('@token')
    return (value)
}

export const storeForgotPasswordData = async (data) => {


    try {
        await AsyncStorage.setItem('@forgotPassword', JSON.stringify(data))

    } catch (e) {
        // saving error
        console.log('>>> saving error : ', e);
    }

}
export const emptyForgotPasswordData = async () => {


    try {
        await AsyncStorage.setItem('@forgotPassword', '')
    } catch (e) {
        // saving error
        console.log('>>> saving error : ', e);
    }

}

export const getForgotPasswordData = async () => {
    var value = await AsyncStorage.getItem('@forgotPassword')
    value = JSON.parse(value)
    return (value)
}

export const PostApiCall = async (endPoint, body, headersRseceived) => {
    // setLoading(true);
    let Token = await getToken()

    const headers =
        (Token === '' || Token === null || Token === undefined
        ) ?
            {
                "Content-Type": "application/json",
            }
            :
            {
                Authorization: `Bearer ${Token}`,
                "Content-Type": headersRseceived ? headersRseceived : "application/json"
            }

    const API = axios.create({

        baseURL: Base_URL,
        // timeout: 100,

        headers: headers
    });
    console.log('>>> headers ', headers);
    console.log('>>> endPoint Post ', endPoint);
    console.log('>>> Token ', Token);
    console.log('>>> body ', JSON.stringify(body));
    return await API.post(endPoint, body)
        .then((data) => {
            console.log('>>> Response  ', endPoint, JSON.stringify(data.data));
            return data
        })
        .catch((error) => {
            console.log('>>> error api call 00 ', error);
            // console.log('>>> error api call 11 ', error.response.data);
            if (error && error.response && error.response.data) {
                let data = error.response.data
                return ({ status: data.status, message: data.message, data: data.data })
            }
            else {
                return error
            }

        });
}

export const GetApiCall = async (endPoint, userheaders, tokenReceive) => {
    // setLoading(true);
    let Token = tokenReceive ? tokenReceive : await getToken()


    const headers =
        (Token === '' || Token === null || Token === undefined
        ) ?
            {
                "Content-Type": "application/json",
            }
            :
            {
                Authorization: `Bearer ${Token}`,
                "Content-Type": "application/json"
            }


    const API = axios.create({

        baseURL: Base_URL,
        // timeout: 100,

        headers: userheaders ? userheaders : headers,
    });
    console.log('>>> endPoint Get ', endPoint);
    console.log('>>> Token ', Token);
    console.log('>>> headers ', userheaders ? userheaders : headers);
    return await API.get(endPoint)
        .then((data) => {
            console.log('>>> Response ', endPoint, JSON.stringify(data.data));
            return data
        })
        .catch((error) => {
            console.log('>>> error api call ', error);
            return (error)
        });
}

export const PutApiCall = async (endPoint, Body, userheaders) => {
    // setLoading(true);
    let Token = await getToken()


    const headers =
        (Token === '' || Token === null || Token === undefined
        ) ?
            {
                "Content-Type": "application/json",
            }
            :
            {
                Authorization: `Bearer ${Token}`,
                "Content-Type": "application/json"
            }


    const API = axios.create({

        baseURL: Base_URL,

        headers: userheaders ? userheaders : headers,
    });
    console.log('>>> endPoint Put ', endPoint);
    console.log('>>> Token ', Token);
    console.log('>>> body ', JSON.stringify(Body));
    return await API.put(endPoint, Body)
        .then((data) => {
            console.log('>>> Response ', endPoint, JSON.stringify(data.data));
            return data
        })
        .catch((error) => {
            console.log('>>> error api call ', error);

            // setLoading(false);
            return (error)
        });
}
export const DeleteApiCall = async (endPoint, Body, userheaders) => {
    // setLoading(true);
    let Token = await getToken()


    const headers =
        (Token === '' || Token === null || Token === undefined
        ) ?
            {
                "Content-Type": "application/json",
            }
            :
            {
                Authorization: `Bearer ${Token}`,
                "Content-Type": "application/json"
            }


    const API = axios.create({

        baseURL: Base_URL,

        headers: userheaders ? userheaders : headers,
    });
    console.log('>>> endPoint Put ', endPoint);
    console.log('>>> Token ', Token);
    console.log('>>> body ', JSON.stringify(Body));
    return await API.delete(endPoint, Body)
        .then((data) => {
            console.log('>>> Response ', endPoint, JSON.stringify(data.data));
            return data
        })
        .catch((error) => {
            console.log('>>> error api call ', error);

            // setLoading(false);
            return (error)
        });
}
















