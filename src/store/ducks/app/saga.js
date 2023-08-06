import { takeLatest, put } from "redux-saga/effects";
import { PostApiCall, GetApiCall, PutApiCall } from "../../../lib/ApiCalls";
import * as actions from './actions';
import * as constants from './constants';
import {
    Auth_Login,
} from "../../../lib/endPoints";

/* fetch Login */
function* loginPateintRequest(req) {
    console.log('>>>> loginPateintRequest  ', req);
    try {
        var response = yield PostApiCall(Auth_Login, req.payload);
        let responseSuccess = response.data
        // console.log('>>>> response  ', response);
        console.log('>>>> responseSuccess ', responseSuccess);
        if (responseSuccess && responseSuccess.status === "Success") {
            yield put(actions.loginPateintSuccess({ data: responseSuccess.data }));
        } else {
            yield put(actions.loginPateintFailure({ message: response.message }));
        }
    } catch (error) {
        yield put(actions.loginPateintFailure({ message: error.message }));
    }
}


export default () => [
    takeLatest(constants.LOGIN_PATIENT_REQUEST, loginPateintRequest),

];