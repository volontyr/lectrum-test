import { combineReducers } from 'redux';

import auth from './auth';
import login from './login';
import ui from './ui';
import forms from './forms';

export default combineReducers({
    auth,
    login,
    forms,
    ui,
});
