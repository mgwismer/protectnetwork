import React, { useState, useCallback } from 'react';

export const SignIn: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = useCallback(e => {
        setUsername(e.target.value);
    }, []);

    const handlePasswordChange = useCallback(e => {
        setPassword(e.target.value);
    }, [])

    return (
        <div className='signin-page'>
            <div className='signin-page-username'>
                <label>
                    <input type='text' value={username} onChange={handleNameChange} />
                </label>
            </div>

            <div className='signin-page-password'>
                <label>
                    <input type='text' value={password} onChange={handlePasswordChange} />
                </label>
            </div>
        </div>
    )

}