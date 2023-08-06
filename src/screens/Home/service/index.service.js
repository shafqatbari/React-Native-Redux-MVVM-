import React, { useEffect, useState, useRef } from 'react';
import { showToast } from '../../../helper/Util';
import { useDispatch, useSelector } from 'react-redux';

const HomeServiceComponent = ({ children, navigation, }) => {

    const [reLoad, setReLoad] = useState(0)
    const [isLoading, setIsLoading] = useState(false);
    var authMeData = useSelector(state => state.app.authMe)


    useEffect(() => {
    }, []);


    return children({
        navigation,




    });

}

export default HomeServiceComponent;
