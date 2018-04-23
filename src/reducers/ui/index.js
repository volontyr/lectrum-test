import { SHOW_SPINNER, HIDE_SPINNER } from '../../actions/login/types';
import { Map } from 'immutable';

const initialState = Map({
    spinner: false
});

export default (state = initialState, { type }) => {
    switch (type) {
        case SHOW_SPINNER:
            return state.set('spinner', true);
        case HIDE_SPINNER:
            return state.set('spinner', false);
        default:
            return state;
    }
};