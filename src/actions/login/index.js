import { LOGIN, SHOW_ERROR, HIDE_ERROR, SET_AUTHENTICATION } from "./types";

export const login = (payload) => ({
    type: LOGIN,
    payload
});

export const showError = (errorMessage) => ({
    type: SHOW_ERROR,
    payload: errorMessage
});

export const hideError = () => ({
    type: HIDE_ERROR
});

export const setAuthentication = (payload) => ({
    type: SET_AUTHENTICATION,
    payload
});