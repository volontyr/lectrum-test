import { all } from 'redux-saga/effects';

import login from './login';

export function* saga () {
    yield all([
        login.loginWatcher(),
        login.signupWatcher()
    ]);
}
