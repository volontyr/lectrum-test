import { combineForms } from 'react-redux-form';

export default combineForms(
    {
        login: {
            username: '',
            password: ''
        },
        signup: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    },
    'forms'
);
