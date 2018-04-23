import { takeEvery, takeLatest } from 'redux-saga/effects';

import {
    LOGIN,
} from '../../actions/login/types';
import {
    REGISTER,
} from '../../actions/registration/types';
import { loginWorker } from './workers/login';
import { signupWorker } from './workers/signup';

export default {
    * loginWatcher () {
        yield takeLatest(LOGIN, loginWorker);
    },
    * signupWatcher () {
        yield takeLatest(REGISTER, signupWorker);
    }
};