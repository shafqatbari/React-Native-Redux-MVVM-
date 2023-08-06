import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from './constants';

const initialState = {
    login: {
        data: [],
        status: 'idle',
        message: {},
        payload: {}
    },


};



//Login

const loginPateintRequest = (state, action) => update(state, {
    login: {
        status: { $set: 'loading' },
        payload: { $set: action.payload }
    }
});

const loginPateintSuccess = (state, action) => update(state, {
    login: {
        message: { $set: action.payload.message },
        data: { $set: action.payload.data },
        status: { $set: 'success' },
    }
});

const loginPateintFailure = (state, action) => update(state, {
    login: {
        message: { $set: action.payload.message },
        status: { $set: 'failure' },
    }
});

const loginPateintIdle = state => update(state, {
    login: {
        data: { $set: initialState.login.data },
        status: { $set: 'idle' },
    }
});


// Handle Actions

export default handleActions({

    [constants.LOGIN_PATIENT_REQUEST]: loginPateintRequest,
    [constants.LOGIN_PATIENT_SUCCESS]: loginPateintSuccess,
    [constants.LOGIN_PATIENT_FAILURE]: loginPateintFailure,
    [constants.LOGIN_PATIENT_IDLE]: loginPateintIdle,


}, initialState);