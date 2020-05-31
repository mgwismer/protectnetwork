import React, { useCallback, useState } from 'react';
import { addContact } from '../../redux/actions';
import { NavLink } from 'react-router-dom';
import { store } from '../../App';

export const NewContact: React.FC = () => {
        const [nameValue, setNameValue] = useState('');
        const [emailValue, setEmailValue] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const handleSubmit = useCallback((e) => {
            e.preventDefault();
            const contact = {
                name: nameValue,
                email: emailValue,
                phone: phoneNumber,
                residentContactIDs: [],
                firstContacts: []
            }
            store.dispatch(addContact(contact));
            setNameValue('');
            setEmailValue('');
            setPhoneNumber('');
        }, [nameValue, emailValue, phoneNumber]);
    
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
    
        return (
        <React.Fragment>
            <h2> Add new contact</h2>
            <div className='new-resident-form'>
                <form onSubmit={handleSubmit}>
                    <div className='new-resident-form-input'>
                        <label>
                        Name:
                        <input type="text" value={nameValue} onChange={handleNameChange} />
                        </label>
                    </div>
                    <br/>
                    <div className='new-resident-form-input'>
                        <label>
                        Email:
                        <input type="text" value={emailValue} onChange={handleEmailChange} />
                        </label>
                    </div>
                    <br/>
                    <div className='new-resident-form-input'>
                        <label>
                            Phone Number
                            <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
                        </label>
                    </div>
                    <div className='new-resident-form-submit'>
                        <input type="submit" value='Submit' />
                    </div>
                </form>
            </div>     
            <button className='new-resident-home'>
                <NavLink to={'/'} style={{color: 'black', textDecoration: 'none', border: '0px'}}>
                    Back to Home
                </NavLink>
            </button>
        </React.Fragment>
    )
}