import React, { useState, useCallback } from 'react';
import { AppState } from '../../redux/reducer';
import { Dispatch, AnyAction, bindActionCreators } from 'redux';
import { makeActiveUser } from '../../redux/actions';
import { connect } from 'react-redux';
import './signin.scss';

export const SignIn: React.FC<ContactProps> = ({ listOfUsers, users }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = useCallback(e => {
        setUsername(e.target.value);
    }, []);

    const handlePasswordChange = useCallback(e => {
        setPassword(e.target.value);
    }, [])

    const handleSubmit = useCallback(() => {
        if (listOfUsers.includes(username)) {
            const { password: userPassword } = users[username];
            if (password === userPassword ) {
                makeActiveUser(username)
            } else {
                alert('Incorrect Password')
            }
        } else {
            alert('No user by that user name')
        }
    },[users, listOfUsers])

    return (        
    <div className='signin-container'>
        <div className='signin-input'>
            <label>
                Username
            </label>
            <input type='text' value={username} onChange={handleUsernameChange} />
        </div>
        <div className='signin-input'>
            <label>
                password
            </label>
            <input type='text' value={password} onChange={handlePasswordChange} />
        </div>
        <div className='signin-submit'>
            <input type="submit" value='Submit' onClick={handleSubmit}/>
        </div>
    </div>
    )
}

const mapStateToProps = (state: AppState) => {
    return {
        listOfUsers: state.listOfUsers,
        users: state.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
    bindActionCreators({ makeActiveUser }, dispatch);

type ContactProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn)