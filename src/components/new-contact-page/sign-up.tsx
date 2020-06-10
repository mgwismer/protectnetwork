import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux/reducer';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { createUser, makeActiveUser } from '../../redux/actions';
import { Redirect } from 'react-router';
import './new-contact-page.scss';

export const SignUp: React.FC<ContactProps> = ({ users, createUser, makeActiveUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [passwordValid, setPasswordValid] = useState(false);
    const [usernameValid, setUsernameValid] = useState(false);
    const [userSubmitted, setUserSubmitted] = useState(false);

    const handleUsernameChange = useCallback(e => {
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
    
    const handleNameChange = useCallback((e) => {
        e.preventDefault();
        setNameValue(e.target.value);
    }, []);

    const handleEmailChange = useCallback((e) => {
        setEmailValue(e.target.value);
    }, []);

    const handlePhoneNumberChange = useCallback((e) => {
        e.preventDefault();
        setPhoneNumber(e.target.value);
    }, []);

    const handleSubmit = useCallback(() => {
        const user = {
            residentContactIDs: [],
            username: username,
            name: nameValue,
            phone: phoneNumber,
            email: emailValue,
            password,
            firstContacts: []
        }
        if (usernameValid && passwordValid) {
            createUser(username, user);
            makeActiveUser(username);
            setNameValue('');
            setEmailValue('');
            setPhoneNumber('');
            setUserSubmitted(true);
        } else {
            alert('user name and password must be valid');
        }
    }, [password, username, nameValue, emailValue, phoneNumber])

    if (userSubmitted) 
        return <Redirect to={'/NewContact'} />

    return (
        <div className='signup-container'>
            <div className='signup-input'>
                <label>
                    Username
                </label>
                <input type='text' value={username} onChange={handleUsernameChange} />
            </div>
            <div className='signup-input'>
                <label>
                    password (at least 8 characters)
                </label>
                <input type='text' value={password} onChange={handlePasswordChange} />
            </div>
            <div className='signup-input'>
                <label>
                    Name:
                </label>
                <input type="text" value={nameValue} onChange={handleNameChange} />
            </div>
            <div className='signup-input'>
                <label>
                Email:
                </label>
                <input type="text" value={emailValue} onChange={handleEmailChange} />
            </div>
            <div className='signup-input'>
                <label>
                    Phone Number
                </label>
                <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
            </div>
            <div className='signup-submit'>
                <input type="submit" value='Submit' onClick={handleSubmit}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppState) => {
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