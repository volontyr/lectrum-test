import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

class Contacts extends Component {

    render() {
        return (
            <Route path = '/contacts' render = { () => {
                return (
                    <section>
                        Hello from lectrum-test contacts page
                    </section>
                );
            }} />
        );
    }
}

export default connect()(Contacts);