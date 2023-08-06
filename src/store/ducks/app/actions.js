import { createAction } from 'redux-actions';
import * as constants from './constants';

// Login
export const loginPateintIdle = createAction(constants.LOGIN_PATIENT_IDLE);
export const loginPateintRequest = createAction(constants.LOGIN_PATIENT_REQUEST);
export const loginPateintSuccess = createAction(constants.LOGIN_PATIENT_SUCCESS);
export const loginPateintFailure = createAction(constants.LOGIN_PATIENT_FAILURE);

