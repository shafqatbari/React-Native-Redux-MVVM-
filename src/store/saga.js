import { all } from 'redux-saga/effects';
import App from './ducks/app/saga';

export default function* rootSaga() {
    yield all([].concat(App()))
};

