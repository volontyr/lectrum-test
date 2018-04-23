import {
    SHOW_ERROR,
    HIDE_ERROR
} from '../../actions/login/types';
import { Map } from 'immutable';

const initialState = Map({
    isError: false,
    errorMessage: ''
});

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_ERROR:
            return state.set('isError', true).set('errorMessage', payload);
        case HIDE_ERROR:
            return state.set('isError', false).set('errorMessage', '');
        default:
            return state;
    }
};
