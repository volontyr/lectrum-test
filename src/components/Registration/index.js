import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Control } from "react-redux-form";
import { bindActionCreators } from 'redux';

import { register } from '../../actions/registration';

class SignupForm extends Component {

    submit = (formData) => {
        this.props.actions.register(formData);
    };

    render() {
        const { login } = this.props;
        const isError = login.get('isError');
        const errorMessage = login.get('errorMessage');

        return (
            <section>
                { isError && <p>{errorMessage}</p> }
                <Form
                    model = 'forms.signup'
                    onSubmit = {this.submit} >
                    <Control.text
                        model = 'forms.signup.firstName'
                        placeholder = 'Enter first name'
                        type = 'text'
                    />
                    <Control.text
                        model = 'forms.signup.lastName'
                        placeholder = 'Enter last name'
                        type = 'text'
                    />
                    <Control.text
                        model = 'forms.signup.email'
                        placeholder = 'Enter email'
                        type = 'text'
                    />
                    <Control.text
                        model = 'forms.signup.password'
                        placeholder = 'Enter password'
                        type = 'password'
                    />
                    <button type = 'submit'>Sign up</button>
                </Form>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    login: state.login
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ register }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);