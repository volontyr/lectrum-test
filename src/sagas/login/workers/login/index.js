import { call, put } from 'redux-saga/effects';
import { showError } from "../../../../actions/login";
import { LOGIN_URL } from '../../../../constants';
import {setAuthentication} from "../../../../actions/login/index";

export function* loginWorker ({ payload }) {
    try {
        const { username, password } = payload;
        let response = yield call(fetch, LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify( {
                email: username,
                password: password
            })

        });

        if(response.status === 200){
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
        } else{
            const { message } = yield call([response, response.json]);
            yield put(showError(message))
        }
    } catch ( { message } ){
        yield put(showError(message));
    } finally {

    }

}