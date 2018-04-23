import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';

import store, { history } from './store';

ReactDOM.render(
    <Provider store = { store } >
        <Router history = { history }>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
