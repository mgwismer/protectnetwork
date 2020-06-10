import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { AppState, ReduxActions } from '../../redux/reducer';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { createUser, makeActiveUser } from '../../redux/actions';
import { Redirect } from 'react-router';

export const SignUp: React.FC<ContactProps> = ({ users, createUser, makeActiveUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState(false);
    const [usernameValid, setUsernameValid] = useState(false);
    const [userSubmitted, setUserSubmitted] = useState(false);

    const handleNameChange = useCallback(e => {
        console.log('users in name change', users);
        setUsername(e.target.value);
        if (!users.includes(e.target.value)) {
            setUsernameValid(true);
        };
    }, [users]);

    const handlePasswordChange = useCallback(e => {
        setPassword(e.target.value);
        if((e.target.value.length) > 7) {
            setPasswordValid(true)
        }
    }, [])

    const handleSubmit = useCallback(() => {
        const user = {
            residentContactIDs: [],
            name: username,
            phone: '',
            email: '',
            password,
            firstContacts: []
        }
        if (usernameValid && passwordValid) {
            createUser(username, user);
            makeActiveUser(username);
            setUserSubmitted(true);
        } else {
            alert('user name and password must be valid');
        }
    }, [password, username])

    if (userSubmitted) 
        return <Redirect to={'/NewContact'} />
        
    return (
        <div>
            <div className='signin-page-username'>
                <label>
                    Username
                    <input type='text' value={username} onChange={handleNameChange} />
                </label>
            </div>
            <div className='signin-page-password'>
                <label>
                    password (at least 8 characters)
                    <input type='text' value={password} onChange={handlePasswordChange} />
                </label>
            </div>
            <div className='new-contact-form-submit'>
                <input type="submit" value='Submit' onClick={handleSubmit}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppState) => {
    console.log('state', state);
    return {
        users: state.listOfUsers
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
    bindActionCreators({ createUser, makeActiveUser }, dispatch);

type ContactProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)