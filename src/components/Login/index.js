import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Control } from "react-redux-form";
import { bindActionCreators } from 'redux';

import { login } from '../../actions/login';

class LoginForm extends Component {

    submit = (formData) => {
        this.props.actions.login(formData);
    };

    render() {
        const { login } = this.props;
        const isError = login.get('isError');
        const errorMessage = login.get('errorMessage');

        return (
            <section>
                { isError && <p>{errorMessage}</p> }
                <Form
                    model = 'forms.login'
                    onSubmit = {this.submit} >
                    <Control.text
                        model = 'forms.login.username'
                        placeholder = 'Enter username'
                        type = 'text'
                    />
                    <Control.text
                        model = 'forms.login.password'
                        placeholder = 'Enter password'
                        type = 'password'
                    />
                    <button type = 'submit'>Login</button>
                </Form>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    login: state.login
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ login }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);