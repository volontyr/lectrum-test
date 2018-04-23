import {
    SET_AUTHENTICATION
} from '../../actions/login/types';
import { Map } from 'immutable';

const initialState = Map({
    isAuthenticated: false,
    currentUser: {
        id: '',
        firstName: '',
        lastName: '',
        groupId: '',
        avatar: '',
        created: 0,
        token: '',
        email: ''
    }
});

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_AUTHENTICATION:
            return state.merge(payload);
        default:
            return state;
    }
};
