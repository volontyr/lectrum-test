import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import LoginForm from '../../components/Login';
import SignupForm from '../../components/Registration';
import Contacts from '../../components/Contacts';

class App extends Component {

    componentDidMount () {
        const { auth, history } = this.props;

        if (!auth.get('isAuthenticated') && history.location.pathname !== '/signup') {
            history.replace('/login');
        }
    }

    render() {
        const { auth, history } = this.props;
        const isAuthenticated = auth.get('isAuthenticated');

        console.log(isAuthenticated);

        return (
            <Switch>
                { isAuthenticated ? <Redirect to = '/contacts' /> : history.location.pathname === '/login'
                    ? <LoginForm /> : <SignupForm/> }
            </Switch>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default withRouter(connect(mapStateToProps)(App));