import { call, put } from 'redux-saga/effects';
import { showError } from "../../../../actions/login";
import { SIGNUP_URL, TOKEN } from '../../../../constants';
import {setAuthentication} from "../../../../actions/login/index";

export function* signupWorker ({ payload }) {
    try {
        const { firstName, lastName, email, password } = payload;

        let response = yield call(fetch, SIGNUP_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                firstName,
                lastName,
                email,
                password,
                invite: TOKEN
            })
        });

        if (response.status === 200) {
            const { data } = yield call([response, response.json]);
            const { id, firstName, lastName, avatar, email, token } = data;
            const auth = {
                isAuthenticated: true,
                currentUser: {
                    id,
                    firstName,
                    lastName,
                    avatar,
                    email,
                    token
                }
            };

            yield put(setAuthentication(auth));
        } else {
            const { message } = yield call([response, response.json]);
            yield put(showError(message))
        }
    } catch ( { message } ){
        yield put(showError(message));
    } finally {
        // yield put(hideSpinner());
    }

}